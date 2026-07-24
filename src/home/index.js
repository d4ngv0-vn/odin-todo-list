import ProjectCardAdd from "../projectAdd/index.js";
import DOMTool from "../utils/DOMTool.js";
import './style.css';

const HomePage = () => {
    const homePage = DOMTool.create('div', [], 'home-page');
    
    const homePageTitle = DOMTool.create('h2', [], 'home-page-title');
    homePageTitle.textContent = 'This is home page';
    
    const hero = DOMTool.create('div', [], 'hero');
    const heroTxtContainer = DOMTool.create('div', [], 'hero-txt-container');

    const title = DOMTool.create('h2', [], 'hero-title');
    title.textContent = `Fukua's todo list`;

    const description = DOMTool.create('p', ['hero-txt'], 'hero-description');
    description.textContent = 'Your light-weight todo list.';

    const special = DOMTool.create('p', ['hero-txt'], 'hero-special');
    special.textContent = 'No login/subscription need!';

    const heroImg = DOMTool.create('img', [], 'hero-img'); 
    heroImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaFr1nrbsC9cs5vCk1FGZ6azPpAsKwkiHhEbXPdPBBA&s=10';


    const createBtn = DOMTool.create('button', [], 'hero-create');
    createBtn.textContent = 'Get started';
    createBtn.addEventListener('click', (event) => {
        const projectAdd = ProjectCardAdd();
        DOMTool.render([projectAdd]);
    });

    DOMTool.append(heroTxtContainer, [title, description, special]);

    DOMTool.append(hero, [heroTxtContainer, heroImg, createBtn]);

    DOMTool.append(homePage, [hero]);
    return homePage;
}

export default HomePage;
