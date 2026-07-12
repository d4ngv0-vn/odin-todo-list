
import { Data, dataLocation } from "../utils/service.js";

const ProjectService = {
    addProject: (project) => {
        const JSONdata = localStorage.getItem(dataLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            data.push(project);
            const saved = JSON.stringify(data);
            localStorage.setItem(dataLocation, saved);
        } else {
            const data = [];
            data.push(project);
            const saved = JSON.stringify(data);
            localStorage.setItem(dataLocation, saved);
        }
    },
    getProject: (projectId) => {
        const JSONdata = localStorage.getItem(dataLocation);
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
        const JSONdata = localStorage.getItem(dataLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    data.splice(i, 1);
                    const saved = JSON.stringify(data);
                    localStorage.setItem(dataLocation, saved);
                    return Data('REMOVED', {});
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    } 
}

export default ProjectService;