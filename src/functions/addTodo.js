export const addTodo = (todo, setTodo, text, todoAll, setTodoAll) => {
    if (!todo) {
        setTodo("Введите текст!");
        text.current.addEventListener("focus", () => setTodo(""));
    } else if (todoAll.findIndex((obj) => obj.todo === todo) !== -1) {
        setTodo("Такая заметка уже создана!");
        text.current.addEventListener("focus", () => setTodo(""));
    } else {
        setTodoAll([...todoAll, { todo: todo, checked: false }]);
        setTodo("");
    }
};
