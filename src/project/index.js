import TodoCard from "../components/todoCard.js";
import ProjectController from "../controllers/projectController.js";
import TodoCardController from "../controllers/todoCardController.js";
import ProjectsPage from "../projects/index.js";
import DOMTool from "../utils/DOMTool.js"
import './style.css';

const ProjectPage = (projectId) => {
    const projectPage = DOMTool.create('div', [], 'project-page');

    // const projectList = TodoCardController.getTodoList(projectId);
    const projectInfo = ProjectController.getProjectById(projectId);
    let todoList = TodoCardController.getTodoList(projectId);

    const projectInfoContainer = DOMTool.create('div', [], 'project-info-container');

    const todoCardContainer = DOMTool.create('div', [], 'todo-card-container');

    const name = DOMTool.create('input', [], 'project-name');
    name.value = projectInfo.name;
    name.placeholder = 'Project name';
    name.addEventListener('input', (event) => {
        projectInfo.name = event.currentTarget.value;
        ProjectController.updateProject(projectId, projectInfo.name, projectInfo.description);
    });

    const description = DOMTool.create('textarea', [], 'project-description');
    description.value = projectInfo.description;
    description.placeholder = 'Project description';
    description.addEventListener('input', (event) => {
        projectInfo.description = event.currentTarget.value;
        ProjectController.updateProject(projectId, projectInfo.name, projectInfo.description);
    });
    
    const btnContainer = DOMTool.create('div', [], 'project-btn-container');

    const addTodoBtn = DOMTool.create('button', ['project-btn'], 'project-add-todo-btn');
    addTodoBtn.textContent = 'add';

    addTodoBtn.addEventListener('click', (event) => {
        TodoCardController.createTodoCard(projectId, 'Untitled card', '', new Date(), false, 'medium');
        todoList = TodoCardController.getTodoList(projectId);
        const tdc = TodoCard(projectId, todoList[todoList.length - 1]);

        DOMTool.append(todoCardContainer, [tdc]);
    });

    const deleteProjectBtn = DOMTool.create('button', ['project-btn'], 'project-delete-btn');
    deleteProjectBtn.textContent = 'Delete';
    deleteProjectBtn.addEventListener('click', (event) => {
        ProjectController.deleteProjectById(projectId);
        const projectsPage = ProjectsPage();
        DOMTool.render([projectsPage]);
    });

    DOMTool.append(btnContainer, [addTodoBtn, deleteProjectBtn]);
    DOMTool.append(projectInfoContainer, [name, description, btnContainer]);

    
    for (let i = 0; i < todoList.length; ++i) {
        let special = -1;
        if (i == 0) special = 0
        else if (i == todoList.length-1) special = 1;
        const tdc = TodoCard(projectId, todoList[i], special);

        DOMTool.append(todoCardContainer, [tdc]);
    }
    DOMTool.append(projectPage, [projectInfoContainer, todoCardContainer]);
    return projectPage;
}

export default ProjectPage;