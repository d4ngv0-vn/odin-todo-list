import DOMTool from "../utils/DOMTool.js";


const HomePage = () => {
    const homePage = DOMTool.create('div', [], 'home-page');
    
    const homePageTitle = DOMTool.create('h2', [], 'home-page-title');
    homePageTitle.textContent = 'This is home page';
    
    DOMTool.append(homePage, [homePageTitle]);
    return homePage;
}

export default HomePage;
