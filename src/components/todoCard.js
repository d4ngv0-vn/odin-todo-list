import TodoCardController from "../controllers/todoCardController.js";
import DateTool from "../utils/dateTool.js";
import DOMTool from "../utils/DOMTool.js";
import './todoCard.css';

const priorityOption = ['important', 'high', 'medium', 'low'];

const TodoCard = (projectId, todoData) => {
    const todoCard = DOMTool.create('div', ['todo-card'], todoData.cardId);

    const name = DOMTool.create('input', ['todo-card-name'], '');
    name.value = todoData.name;
    name.addEventListener('input', (event) => {
        todoData.name = event.currentTarget.value;
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    });

    const description = DOMTool.create('p', ['todo-card-description'], '');
    description.textContent = todoData.description;
    const due = DOMTool.create('input', ['todo-card-due'], '');
    due.type = 'date';
    const dueDate = DateTool.getDateDefault(todoData.due);
    due.value = dueDate;
    due.addEventListener('input', (event) => {
        // console.log(event.currentTarget.value);
        todoData.due = DateTool.convert(event.currentTarget.value);
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    });

    const btnContainer = DOMTool.create('div', ['todo-card-btn-container'], '');

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

    const done = DOMTool.create('input', ['todo-card-done'], '');
    done.type = 'checkbox';
    done.checked = todoData.done;

    done.addEventListener('input', (event) => {
        todoData.done = !todoData.done;
        TodoCardController.updateTodoCard(projectId, todoData.cardId, todoData.name, todoData.description, todoData.due, todoData.done, todoData.priority);
    })

    DOMTool.append(todoCard, [done, name, due, priority]);
    return todoCard;
}

export default TodoCard;