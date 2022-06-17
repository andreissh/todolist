import { findActiveClass } from "./findActiveClass";

export const showCompleted = (setTodoFiltered, todoAll, filter) => {
    setTodoFiltered([...todoAll].filter((obj) => obj.checked));
    const completed = filter.current.children[2];
    if (completed.classList.length < 2) {
        let activeClass = findActiveClass(filter);
        completed.classList.add(activeClass);
    }
};
