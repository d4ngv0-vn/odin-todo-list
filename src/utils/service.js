const Data = (code = 'NOT FOUND', data) => {
    const getData = () => {
        return data;
    }
    const getCode = () => {
        return code;
    }
    return {getCode, getData};
}

const dataLocation = 'odinTodoList';
const projectsLocation = 'projects';
const todoCardLocation = 'todoCards';

export { Data, dataLocation, projectsLocation, todoCardLocation };