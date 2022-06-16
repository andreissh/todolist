import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Main.module.scss";

const Main = () => {
    const [todo, setTodo] = useState("");
    const [todoAll, setTodoAll] = useState([]);
    const [todoFiltered, setTodoFiltered] = useState([]);
    const filter = useRef();

    useEffect(() => {
        setTodoFiltered([...todoAll]);
    }, [todoAll]);

    const addTodo = () => {
        setTodoAll([...todoAll, { todo: todo, checked: false }]);
        setTodo("");
    };

    const checkTodo = (value) => {
        setTodoAll(
            [...todoAll].map((obj) => {
                return obj.todo === value ? { todo: value, checked: !obj.checked } : obj;
            })
        );
    };

    const findActiveClass = () => {
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

    const showAll = () => {
        setTodoFiltered([...todoAll]);
        if (filter.current.children[0].classList.length < 2) {
            let activeClass = findActiveClass();
            filter.current.children[0].classList.add(activeClass);
        }
    };

    const showActive = () => {
        setTodoFiltered([...todoAll].filter((obj) => !obj.checked));
        if (filter.current.children[1].classList.length < 2) {
            let activeClass = findActiveClass();
            filter.current.children[1].classList.add(activeClass);
        }
    };

    const showCompleted = () => {
        setTodoFiltered([...todoAll].filter((obj) => obj.checked));
        if (filter.current.children[2].classList.length < 2) {
            let activeClass = findActiveClass();
            filter.current.children[2].classList.add(activeClass);
        }
    };

    const clearCompleted = () => {
        setTodoAll([...todoAll].filter((obj) => !obj.checked));
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) addTodo();
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>todos</h1>
                <div className={styles.todolist}>
                    <div className={styles.inputBlock}>
                        <input
                            className={styles.input}
                            placeholder="What needs to be done?"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            onKeyDown={onKeyDown}
                        ></input>
                        <button className={styles.btn} onClick={addTodo}></button>
                    </div>
                    <div className={styles.list}>
                        {todoFiltered.map((obj, i) => {
                            return (
                                <div className={styles.listItem} key={`#${i + 1}`}>
                                    <input
                                        id={`#${i + 1}`}
                                        type="checkbox"
                                        className={styles.itemCheckbox}
                                        onChange={() => checkTodo(obj.todo)}
                                        checked={obj.checked}
                                    ></input>
                                    <span className={styles.itemChecked}></span>
                                    <label htmlFor={`#${i + 1}`} className={styles.itemLabel}>
                                        {obj.todo}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.filterBlock}>
                        <span className={styles.counter}>
                            {todoAll.filter((obj) => !obj.checked).length} items left
                        </span>
                        <ul className={`${styles.listReset} ${styles.filterList}`} ref={filter}>
                            <li className={`${styles.filterItem} ${styles.filterItemActive}`} onClick={showAll}>
                                All
                            </li>
                            <li className={`${styles.filterItem}`} onClick={showActive}>
                                Active
                            </li>
                            <li className={`${styles.filterItem}`} onClick={showCompleted}>
                                Completed
                            </li>
                        </ul>
                        <button className={styles.clear} onClick={clearCompleted}>
                            Clear completed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
