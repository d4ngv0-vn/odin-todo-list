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


export { Data, dataLocation };