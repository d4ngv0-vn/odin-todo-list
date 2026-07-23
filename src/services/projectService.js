
import { Data, dataLocation, todoCardLocation, projectsLocation } from "../utils/service.js";

const ProjectService = {
    addProject: (project) => {
        const JSONdataProject = localStorage.getItem(projectsLocation);
        const JSONdataTodoCard = localStorage.getItem(todoCardLocation);
        if (JSONdataProject) {
            const data = JSON.parse(JSONdataProject);
            data.push(project);
            const saved = JSON.stringify(data);
            localStorage.setItem(projectsLocation, saved);
        } else {
            const data = [];
            data.push(project);
            const saved = JSON.stringify(data);
            localStorage.setItem(projectsLocation, saved);
        }
        if (JSONdataTodoCard) {
            const data = JSON.parse(JSONdataTodoCard);
            const todoCard = {
                projectId: project.projectId,
                todoList: []
            }
            data.push(todoCard);
            const saved = JSON.stringify(data);
            localStorage.setItem(todoCardLocation, saved);
        } else {
            const data = [];
            const todoCard = {
                projectId: project.projectId,
                todoList: []
            }
            data.push(todoCard);
            const saved = JSON.stringify(data);
            localStorage.setItem(todoCardLocation, saved);
        }
        return Data('ADDED', {});
    },
    getProject: (projectId) => {
        const JSONdata = localStorage.getItem(projectsLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    return Data('FOUND', data[i]);
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    },
    removeProject: (projectId) => {
        const JSONdata = localStorage.getItem(projectsLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    data.splice(i, 1);
                    const saved = JSON.stringify(data);
                    localStorage.setItem(projectsLocation, saved);
                    return Data('REMOVED', {});
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    },
    editProject: (projectId, project) => {
        const JSONdata = localStorage.getItem(projectsLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    data[i] = project;
                    const saved = JSON.stringify(data);
                    localStorage.setItem(projectsLocation, saved);
                    return Data('EDITED', {});
                }
            }
            return Data('PROJECT NOT FOUND', {});
        }
        return Data('DATA NOT FOUND', {});

    },
    getAllProjects: () => {
        const JSONdata = localStorage.getItem(projectsLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            return Data('FOUND', data);
        } 
        return Data('DATA NOT FOUND', {});
    }
}

export default ProjectService;