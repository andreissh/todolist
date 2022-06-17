export const findActiveClass = (filter) => {
    let activeClass;
    let filters = filter.current.children;
    for (let i = 0; i < filters.length; i++) {
        if (filters[i].classList.length > 1) {
            activeClass = filters[i].classList[1];
            filters[i].classList.remove(activeClass);
        }
    }
    return activeClass;
};
