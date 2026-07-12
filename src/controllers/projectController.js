import ProjectService from "../services/projectService.js";

const Project = (n, des) => {
    let name = n;
    let description = des;

    let projectId = crypto.randomUUID();

    let dateCreated = new Date();
    let dateEdited = new Date();

    let todoList = [];

    return {projectId, name, description, dateCreated, dateEdited, todoList};
}

const ProjectController = {
    createProject: (name = '', description = '') => {
        const project = Project(name, description);
        ProjectService.addProject(project);
    },
    getProjectById: (id) => {
        const data = ProjectService.getProject(id);
        if (data.getCode() == 'FOUND') {
            return data.getData();
        }
        return {};
    },
    deleteProjectById: (id) => {
        const data = ProjectService.removeProject(id);
        return data.getCode();
        if (data.getCode() == 'REMOVED') {
            console.log('Delete successful');
        } else {
            console.log(`ERROR! Error message: ${data.getCode()}! Delete unsuccessful`);
        }
    }
}

export default ProjectController;