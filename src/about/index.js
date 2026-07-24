import DOMTool from "../utils/DOMTool.js"
import './style.css';

const AboutPage = () => {
    const aboutPage = DOMTool.create('div', [], 'about-page');

    const title = DOMTool.create('h2', [], 'about-title');
    title.textContent = 'About';

    const content = DOMTool.create('p', [], 'about-content');
    content.textContent = 'This page was made during studying the Odin project!';

    const githubLink = DOMTool.create('a', [], 'about-link');
    githubLink.textContent = 'Click here for github link';
    githubLink.href = 'https://github.com/d4ngv0-vn/odin-todo-list';

    const imgReference = DOMTool.create('a', [], 'about-reference');
    imgReference.textContent = 'Click here for img';
    imgReference.href = 'https://static.wikia.nocookie.net/skullgirls/images/3/3f/Breakdown.png/revision/latest?cb=20160630210013';

    DOMTool.append(aboutPage, [title, content, githubLink, imgReference]);

    return aboutPage;
}

export default AboutPage;