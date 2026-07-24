import ProjectController from "../controllers/projectController.js";
import ProjectPage from "../project/index.js";
import DOMTool from "../utils/DOMTool.js";

const ProjectCardAdd = () => {
    const projectCardAdd = DOMTool.create('div', [], 'project-card-add');
    const form = DOMTool.create('form', [], 'project-card-add-form');

    const legend = DOMTool.create('legend', [], 'project-card-add-legend');
    legend.textContent = 'Create new project';

    const name = DOMTool.create('input', [], 'project-card-add-name');
    name.type = 'text';
    name.placeholder = 'School work';
    name.name = 'name';
    name.focus();

    const nameLabel = DOMTool.create('label', ['label'], 'project-card-add-name-label');
    nameLabel.htmlFor = 'project-card-add-name';
    nameLabel.textContent = 'Project name';

    const description = DOMTool.create('input', [], 'project-card-add-description');
    description.type = 'text';
    description.placeholder = 'Road to conquire all exams';
    description.name = 'description';

    
    const descriptionLabel = DOMTool.create('label', ['label'], 'project-card-add-description-label');
    descriptionLabel.htmlFor = 'project-card-add-description';
    descriptionLabel.textContent = 'Project description';

    const button = DOMTool.create('button', ['submit-btn'], 'project-card-add-submit-btn');
    button.textContent = 'Create';
    button.addEventListener('click', (event) => {
        const formData = new FormData(form);
        const projectName = formData.get('name');
        const projectDescription = formData.get('description');
        ProjectController.createProject(projectName, projectDescription);


        event.preventDefault();
        
        const projectList = ProjectController.getProjectList();
        const projectId = projectList[projectList.length-1].projectId;

        const projectPage = ProjectPage(projectId);
        DOMTool.render([projectPage]);
    });

    DOMTool.append(form, [legend, nameLabel, name, descriptionLabel, description, button]);
    DOMTool.append(projectCardAdd, [form]);
    return projectCardAdd;
}

export default ProjectCardAdd;