import DOMTool from "./utils/DOMTool.js";
import ProjectController from "./controllers/projectController.js";
import TodoCardController from "./controllers/todoCardController.js";
import HomePage from "./home/index.js";
import ProjectsPage from "./projects/index.js";
import './style.css';
import AboutPage from "./about/index.js";
// import ProjectPage from "./project/index.js";


const HeaderNav = () => {
    const navBtns = document.querySelectorAll('.nav-btn');

    const homePage = HomePage();
    const aboutPage = AboutPage();
    
    for (let navBtn of navBtns) {
        navBtn.addEventListener('click', (event) => {
            const page = event.currentTarget.textContent;
            if (page == 'Home') {
                DOMTool.render([homePage]);
            } else if (page == 'Projects') {
                const projectsPage = ProjectsPage();
                DOMTool.render([projectsPage]);
            } else if (page == 'About') {
                DOMTool.render([aboutPage]);
            }
        });
    }
    DOMTool.render([homePage]);

    return;
}
 
// const Page = () => {
//     const page = {value:'Home', card:''};
//     const content = document.getElementById('content');
//     let firstTime = false;

//     const projectsPage = ProjectsPage();
//     const projectPageList = [];

//     const setup = () => {
//         const navBtns = document.querySelectorAll('.nav-btn');
//         for (let btn of navBtns) {
//             btn.addEventListener('click', (event) => {
//                 page.value = event.target.textContent;
//                 render();
//             });
//         }
//         render();
//     }

//     const projectBtnHandle = (event) => {
//         page.value = 'Project';
//         page.card = event.currentTarget.id;
//         render();
//     }

//     const bindProjectBtn = () => {
//         const projectCards = document.querySelectorAll('.project-card');
//         for (let project of projectCards) {
//             project.removeEventListener('click', projectBtnHandle);
//             project.addEventListener('click', projectBtnHandle);
//         }
//         firstTime = true;
//     }

//     const render = () => {
//         content.replaceChildren();
//         if (page.value == 'Home') {
//             DOMTool.append(content, [homePage]);
//         } else if (page.value == 'Projects') {
//             DOMTool.append(content, [projectsPage]);
//             bindProjectBtn();
//         } else if (page.value == 'Project') {
//             const projectPage = ProjectPage(page.card);
//             DOMTool.append(content, [projectPage])
//         }
//     }

//     return {setup}
// }

const page = HeaderNav();
// page.setup();


// ProjectController.createProject('1 start', 'Hello nether');

// TodoCardController.createTodoCard('ec898ea5-8d45-41a9-b0f6-e9e3d6816634', 'second card');
// console.log(TodoCardController.deleteTodoCard('eb050944-17aa-4c70-bf20-96dacc3794e1', 'dab4b7b2-3493-4a1f-acf9-2836290aa983'));

// console.log(TodoCardController.updateTodoCard('eb050944-17aa-4c70-bf20-96dacc3794e1', '74b3018c-18a9-4c19-b094-cbb5ac24bb20', 'second card2222'))

