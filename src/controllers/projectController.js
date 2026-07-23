import ProjectService from "../services/projectService.js";

const Project = (n, des) => {
    let name = n;
    let description = des;

    let projectId = crypto.randomUUID();

    let dateCreated = new Date();
    let dateEdited = new Date();

    return {projectId, name, description, dateCreated, dateEdited};
}

const ProjectController = {
    createProject: (name = '', description = '') => {
        const project = Project(name, description);
        ProjectService.addProject(project);
    },
    getProjectById: (projectId) => {
        const data = ProjectService.getProject(projectId);
        if (data.getCode() == 'FOUND') {
            return data.getData();
        }
        return {};
    },
    deleteProjectById: (projectId) => {
        const data = ProjectService.removeProject(projectId);
        return data.getCode();
        if (data.getCode() == 'REMOVED') {
            console.log('Delete successful');
        } else {
            console.log(`ERROR! Error message: ${data.getCode()}! Delete unsuccessful`);
        }
    },
    updateProject: (projectId, name = '', description = '') => {
        const oldData = ProjectController.getProjectById(projectId);
        if (oldData) {
            oldData.name = name;
            oldData.description = description;
            oldData.dateEdited = new Date();
            ProjectService.editProject(projectId, oldData);
        }
        return {};
    },
    getProjectList: () => {
        const data = ProjectService.getAllProjects();
        if (data.getCode() == 'FOUND') {
            return data.getData();
        }
        return [];
    }
}

export default ProjectController;