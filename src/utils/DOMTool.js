const DOMTool = {
    create: (tag, classList = [], id = '') => {
        const dom = document.createElement(tag);
        classList.forEach(c => {
            dom.classList.add(c); 
        });
        dom.id = id;
        return dom;
    },
    append: (dom, children) => {
        children.forEach(c => {
            dom.appendChild(c);
        });
    }
}

export default DOMTool;