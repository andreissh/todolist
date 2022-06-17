export const checkTodo = (value, todoAll, setTodoAll) => {
    setTodoAll(
        [...todoAll].map((obj) => {
            return obj.todo === value ? { todo: value, checked: !obj.checked } : obj;
        })
    );
};
