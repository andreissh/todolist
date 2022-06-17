export const checkTodo = (value, todoAll, setTodoAll) => {
    setTodoAll(
        [...todoAll].map((note) => {
            return note.todo === value ? { todo: value, checked: !note.checked } : note;
        })
    );
};
