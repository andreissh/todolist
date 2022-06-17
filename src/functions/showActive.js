import { findActiveClass } from "./findActiveClass";

export const showActive = (todoAll, setTodoFiltered, filter) => {
    setTodoFiltered([...todoAll].filter((note) => !note.checked));
    const active = filter.current.children[1];
    if (active.classList.length < 2) {
        let activeClass = findActiveClass(filter);
        active.classList.add(activeClass);
    }
};
