export const clearCompleted = (todoAll, setTodoAll) => {
    setTodoAll([...todoAll].filter((note) => !note.checked));
};
