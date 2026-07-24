import { Data, dataLocation, projectsLocation, todoCardLocation } from "../utils/service.js";
import ProjectService from "./projectService.js";

const TodoCardService = {
    addTodoCard: (projectId, todoCard) => {
        const JSONdata = localStorage.getItem(todoCardLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    data[i].todoList.push(todoCard);
                    const saved = JSON.stringify(data);
                    localStorage.setItem(todoCardLocation, saved);
                    return Data('ADDED', {})
                }
            }
            return Data('PROJECT NOT FOUND', {});
        } 
        return Data('DATA NOT FOUND', {});
    },
    editTodoCard(projectId, cardId, todoCard) {
        const JSONdata = localStorage.getItem(todoCardLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    for (let j = 0; j < data[i].todoList.length; ++j) {
                        if (data[i].todoList[j].cardId === cardId) {
                            data[i].todoList[j] = todoCard;
                            const saved = JSON.stringify(data);
                            localStorage.setItem(todoCardLocation, saved);
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
        const JSONdata = localStorage.getItem(todoCardLocation);
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
        const JSONdata = localStorage.getItem(todoCardLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId === projectId) {
                    for (let j = 0; j < data[i].todoList.length; ++j) {
                        if (data[i].todoList[j].cardId === cardId) {
                            data[i].todoList.splice(j, 1);
                            const saved = JSON.stringify(data);
                            localStorage.setItem(todoCardLocation, saved);
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
    getTodoList: (projectId) => {
        const JSONdata = localStorage.getItem(todoCardLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            // console.log("getTodoList", data);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId == projectId) {
                    return Data("FOUND", data[i].todoList);
                }
            }
            return Data("PROJECT NOT FOUND", {});
        }
        return Data("DATA NOT FOUND", {});
    },
    moveUp: (projectId, cardId) => {
        const JSONdata = localStorage.getItem(todoCardLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId == projectId) {
                    for (let j = 0; j < data[i].todoList.length; ++j) {
                        if (data[i].todoList[j].cardId == cardId) {
                            let temp = data[i].todoList[j];
                            data[i].todoList[j] = data[i].todoList[(j-1)%data[i].todoList.length];
                            data[i].todoList[(j-1)%data[i].todoList.length] = temp;

                            const saved = JSON.stringify(data);
                            localStorage.setItem(todoCardLocation, saved);
                            return Data('MOVED', {});
                        }
                    }
                    return Data("CARD NOT FOUND", {});
                }
            }
            return Data("PROJECT NOT FOUND", {});
        }
        return Data("DATA NOT FOUND", {}); 
    },
    moveDown: (projectId, cardId) => {
        const JSONdata = localStorage.getItem(todoCardLocation);
        if (JSONdata) {
            const data = JSON.parse(JSONdata);
            for (let i = 0; i < data.length; ++i) {
                if (data[i].projectId == projectId) {
                    for (let j = 0; j < data[i].todoList.length; ++j) {
                        if (data[i].todoList[j].cardId == cardId) {
                            let temp = data[i].todoList[j];
                            data[i].todoList[j] = data[i].todoList[(j+1)%data[i].todoList.length];
                            data[i].todoList[(j+1)%data[i].todoList.length] = temp;

                            const saved = JSON.stringify(data);
                            localStorage.setItem(todoCardLocation, saved);
                            return Data('MOVED', {});
                        }
                    }
                    return Data("CARD NOT FOUND", {});
                }
            }
            return Data("PROJECT NOT FOUND", {});
        }
        return Data("DATA NOT FOUND", {}); 
    }
}

export default TodoCardService;