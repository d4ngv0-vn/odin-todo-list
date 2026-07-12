import DOMTool from "./utils/DOMTool.js";
import ProjectController from "./controllers/projectController.js";
import TodoCardController from "./controllers/todoCardController.js";

class Page {
    Page() {
        this.page = document.getElementById('content');
    }
}



const TodoCard = (id, name = '', description = '', due = '', done = false, priority = 'low') => {
    const todoCard = DOMTool.create('div', ['todo-card', id]);

    return todoCard;
}

// ProjectController.createProject('1 start', 'Hello nether');

// TodoCardController.createTodoCard('eb050944-17aa-4c70-bf20-96dacc3794e1', 'first card');
// console.log(TodoCardController.deleteTodoCard('eb050944-17aa-4c70-bf20-96dacc3794e1', 'dab4b7b2-3493-4a1f-acf9-2836290aa983'));

// console.log(TodoCardController.updateTodoCard('eb050944-17aa-4c70-bf20-96dacc3794e1', '74b3018c-18a9-4c19-b094-cbb5ac24bb20', 'second card2222'))

