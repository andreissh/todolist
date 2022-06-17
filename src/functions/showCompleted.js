import { findActiveClass } from "./findActiveClass";

export const showCompleted = (todoAll, setTodoFiltered, filter) => {
    setTodoFiltered([...todoAll].filter((note) => note.checked));
    const completed = filter.current.children[2];
    if (completed.classList.length < 2) {
        let activeClass = findActiveClass(filter);
        completed.classList.add(activeClass);
    }
};
