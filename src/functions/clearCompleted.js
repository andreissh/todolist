export const clearCompleted = (todoAll, setTodoAll) => {
    setTodoAll([...todoAll].filter((obj) => !obj.checked));
};
