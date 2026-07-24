import ProjectPage from "../project/index.js";
import DOMTool from "../utils/DOMTool.js";
import DateTool from "../utils/dateTool.js";
import './projectCard.css';

const ProjectCard = (title, description, dateCreated, projectId) => {
    const projectCard = DOMTool.create('button', ['project-card'], projectId);
    projectCard.addEventListener('click', (event) => {
        const projectId = event.currentTarget.id;
        const projectPage = ProjectPage(projectId);
        DOMTool.render([projectPage]);
    });

    const projectCardTitle = DOMTool.create('h3', ['project-card-title']);
    projectCardTitle.textContent = title;

    const projectCardDescription = DOMTool.create('p', ['project-card-description']);
    projectCardDescription.textContent = description;
    
    const projectCardDateCreated = DOMTool.create('p', ['project-card-date-created']);
    projectCardDateCreated.textContent = DateTool.getDateDefault(dateCreated);


    DOMTool.append(projectCard, [projectCardTitle, projectCardDescription, projectCardDateCreated]);

    return projectCard;
}

export default ProjectCard;