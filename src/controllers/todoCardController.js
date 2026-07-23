import TodoCardService from "../services/todoCardService.js";

const TodoCard = (n, des, de, dn, pri) => {
    let name = n;
    let description = des;
    let due = de;
    let done = dn;
    let priority = pri;

    let cardId = crypto.randomUUID();
    
    let dateCreated = new Date();
    let dateEdited = new Date();

    return {name, description, due, done, priority, cardId, dateCreated, dateEdited};
};

const TodoCardController = {
    createTodoCard: (projectId, name = '', description = '', due = new Date(), done = false, priority = 'low') => {
        const todoCard = TodoCard(name, description, due, done, priority);
        const status = TodoCardService.addTodoCard(projectId, todoCard);
        return status.getCode();        
    },
    getTodoCard: (projectId, cardId) => {
        const data = TodoCardService.getTodoCard(projectId, cardId);
        if (data.getCode() == 'FOUND') {
            return data.getData();
        }
        return {};
    },
    deleteTodoCard: (projectId, cardId) => {
        const data = TodoCardService.removeTodoCard(projectId, cardId);
        return data.getCode();
    },
    updateTodoCard: (projectId, cardId, name = '', description = '', due = new Date(), done = false, priority = 'low') => {
        // const todoCard = TodoCard(name, description, due, done, priority);
        const data = TodoCardService.getTodoCard(projectId, cardId);
        if (data.getCode() == 'FOUND') {
            const todoCard = data.getData();
            todoCard.name = name;
            todoCard.description = description;
            todoCard.due = due;
            todoCard.done = done;
            todoCard.priority = priority;
            todoCard.dateEdited = new Date();
            TodoCardService.editTodoCard(projectId, cardId, todoCard);
        }
        return data.getCode();
    },
    getTodoList: (projectId) => {
        const data = TodoCardService.getTodoList(projectId);
        console.log(data.getCode());
        if (data.getCode() == 'FOUND') {
            return data.getData();
        }
        return [];
    }

};

export default TodoCardController;