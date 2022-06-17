import { findActiveClass } from "./findActiveClass";

export const showActive = (setTodoFiltered, todoAll, filter) => {
    setTodoFiltered([...todoAll].filter((obj) => !obj.checked));
    const active = filter.current.children[1];
    if (active.classList.length < 2) {
        let activeClass = findActiveClass(filter);
        active.classList.add(activeClass);
    }
};
