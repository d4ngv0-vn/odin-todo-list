import TodoCardController from "../controllers/todoCardController.js";
import ProjectPage from "../project/index.js";
import DateTool from "../utils/dateTool.js";
import DOMTool from "../utils/DOMTool.js";
import './todoCard.css';

const priorityOption = ['important', 'high', 'medium', 'low'];

const TodoCard = (projectId, todoData, special) => {
    const todoCard = DOMTool.create('div', ['todo-card'], todoData.cardId);

    const name = DOMTool.create('input', ['todo-card-name'], '');
    name.value = todoData.name;
    name.placeholder = 'My first card';
    name.addEventListener('input', (event) => {
        todoData.name = event.currentTarget.value;
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    });

    const description = DOMTool.create('textarea', ['todo-card-description', 'hidden'], '');
    description.textContent = todoData.description;
    description.placeholder = 'This is description of my card';
    description.addEventListener('input', (event) => {
        todoData.description = event.currentTarget.value;
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    });

    const dueContainer = DOMTool.create('div', ['todo-card-due-container'], '');
    const dueTxt = DOMTool.create('label', ['todo-card-due-txt'], '');
    dueTxt.htmlFor = `due-${todoData.cardId}`;
    dueTxt.textContent = 'Due: ';

    const due = DOMTool.create('input', ['todo-card-due'], `due-${todoData.cardId}`);
    due.type = 'date';
    const dueDate = DateTool.getDateDefault(todoData.due);
    due.value = dueDate;
    due.addEventListener('input', (event) => {
        // console.log(event.currentTarget.value);
        todoData.due = DateTool.convert(event.currentTarget.value);
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    });

    DOMTool.append(dueContainer, [dueTxt, due]);

    const btnContainer = DOMTool.create('div', ['todo-card-btn-container'], '');
    
    const upBtn = DOMTool.create('button', ['todo-card-btn'], '');
    upBtn.textContent = 'up';
    upBtn.addEventListener('click', (event) => {
        TodoCardController.moveTodoUp(projectId, todoData.cardId);
        const projectPage = ProjectPage(projectId);
        DOMTool.render([projectPage]);
    });
    if (special == 0) {
        upBtn.disabled = true;
    }

    const downBtn = DOMTool.create('button', ['todo-card-btn'], '');
    downBtn.textContent = 'down';
    downBtn.addEventListener('click', (event) => {
        TodoCardController.moveTodoDown(projectId, todoData.cardId);
        const projectPage = ProjectPage(projectId);
        DOMTool.render([projectPage]);
    });
    if (special == 1) {
        downBtn.disabled = true;
    }

    const infoBtn = DOMTool.create('button', ['todo-card-btn'], '');
    infoBtn.textContent = 'info';

    infoBtn.addEventListener('click', (event) => {
        description.classList.toggle('hidden');
    });

    const deleteBtn = DOMTool.create('button', ['todo-card-btn', 'todo-card-delete-btn'], '');
    deleteBtn.textContent = 'delete';
    deleteBtn.addEventListener('click', (event) => {
        TodoCardController.deleteTodoCard(projectId, todoData.cardId);
        const projectPage = ProjectPage(projectId);
        DOMTool.render([projectPage]);
    });

    DOMTool.append(btnContainer, [infoBtn, upBtn, downBtn, deleteBtn]);

    const priorityContainer = DOMTool.create('div', ['todo-card-priority-container'], '');
    const priorityTxt = DOMTool.create('label', ['todo-card-priority-txt'], '');
    priorityTxt.htmlFor = `priority-${todoData.cardId}`;
    priorityTxt.textContent = 'Priority: ';
    const priority = DOMTool.create('select', ['todo-card-priority'], `priority-${todoData.cardId}`);
    priorityOption.forEach((pri) => {
        const option = new Option(pri, pri);
        priority.add(option);
    });
    priority.value = todoData.priority;
    priority.addEventListener('input', (event) => {
        todoData.priority = event.currentTarget.value;
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    });

    DOMTool.append(priorityContainer, [priorityTxt, priority]);

    const done = DOMTool.create('input', ['todo-card-done'], '');
    done.type = 'checkbox';
    done.checked = todoData.done;

    done.addEventListener('input', (event) => {
        todoData.done = !todoData.done;
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    })

    DOMTool.append(todoCard, [done, name, dueContainer, priorityContainer, btnContainer, description]);
    return todoCard;
}

export default TodoCard;