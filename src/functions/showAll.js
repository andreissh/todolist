import { findActiveClass } from "./findActiveClass";

export const showAll = (setTodoFiltered, todoAll, filter) => {
    setTodoFiltered([...todoAll]);
    const all = filter.current.children[0];
    if (all.classList.length < 2) {
        let activeClass = findActiveClass(filter);
        all.classList.add(activeClass);
    }
};
