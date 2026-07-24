import DOMTool from "../utils/DOMTool.js";
import ProjectCard from "../components/projectCard.js";
import ProjectController from "../controllers/projectController.js";
import ProjectCardAdd from "../projectAdd/index.js";
import './style.css';


const ProjectsPage = () => {
    const projectsPage = DOMTool.create('div', [], 'projects-page');

    const projectCardAdd = ProjectCardAdd();
    
    const addProjectBtn = DOMTool.create('button', [], 'project-add');
    addProjectBtn.textContent = 'Create new project';
    addProjectBtn.addEventListener('click', (event) => {
        DOMTool.render([projectCardAdd]);
    });


    const projectsContainer = DOMTool.create('div', [], 'projects-container');
    const projectList = ProjectController.getProjectList();

    

    projectList.forEach(project => {
        const pc = ProjectCard(project.name, project.description, project.dateCreated, project.projectId);

        DOMTool.append(projectsContainer, [pc]);
    });
    
    DOMTool.append(projectsPage, [addProjectBtn, projectsContainer]);
    return projectsPage;
}



export default ProjectsPage;