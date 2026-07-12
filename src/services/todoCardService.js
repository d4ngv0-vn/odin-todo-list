import { Data, dataLocation } from "../utils/service.js";
import ProjectService from "./projectService.js";

const TodoCardService = {
    addTodoCard: (projectId, todoCard) => {
        const JSONdata = localStorage.getItem(dataLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    data[i].todoList.push(todoCard);
                    const saved = JSON.stringify(data);
                    localStorage.setItem(dataLocation, saved);
                    return Data('ADDED', {})
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    },
    editTodoCard(projectId, cardId, todoCard) {
        const JSONdata = localStorage.getItem(dataLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    for (let j = 0; j < data[i].todoList.length; ++j) {
                        if (data[i].todoList[j].cardId === cardId) {
                            data[i].todoList[j] = todoCard;
                            const saved = JSON.stringify(data);
                            localStorage.setItem(dataLocation, saved);
                            return Data('EDITED', {});
                        }
                    }
                    return Data('CARD NOT FOUND', {})
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    },
    getTodoCard: (projectId, cardId) => {
        const JSONdata = localStorage.getItem(dataLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    for (let j = 0; j < data[i].todoList.length; ++j) {
                        if (data[i].todoList[j].cardId === cardId) {
                            return Data('FOUND', data[i].todoList[j]);
                        }
                    }
                    return Data('CARD NOT FOUND', {});
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    },
    removeTodoCard: (projectId, cardId) => {
        const JSONdata = localStorage.getItem(dataLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    for (let j = 0; j < data[i].todoList.length; ++j) {
                        if (data[i].todoList[j].cardId === cardId) {
                            data[i].todoList.splice(j, 1);
                            const saved = JSON.stringify(data);
                            localStorage.setItem(dataLocation, saved);
                            return Data('REMOVED', {});
                        }
                    }
                    return Data('CARD NOT FOUND', {});
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    },
    getTodoCardList: () => {

    }
}

export default TodoCardService;