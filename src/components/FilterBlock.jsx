import React from "react";
import { clearCompleted } from "../functions/clearCompleted";
import { showActive } from "../functions/showActive";
import { showAll } from "../functions/showAll";
import { showCompleted } from "../functions/showCompleted";
import styles from "../styles/FilterBlock.module.scss";

const FilterBlock = ({ todoAll, setTodoAll, filter, setTodoFiltered }) => {
    return (
        <div className={styles.filterBlock}>
            <span className={styles.counter}>{todoAll.filter((obj) => !obj.checked).length} items left</span>
            <ul className={`${styles.listReset} ${styles.filterList}`} ref={filter}>
                <li
                    className={`${styles.filterItem} ${styles.filterItemActive}`}
                    onClick={() => showAll(setTodoFiltered, todoAll, filter)}
                >
                    All
                </li>
                <li className={`${styles.filterItem}`} onClick={() => showActive(setTodoFiltered, todoAll, filter)}>
                    Active
                </li>
                <li className={`${styles.filterItem}`} onClick={() => showCompleted(setTodoFiltered, todoAll, filter)}>
                    Completed
                </li>
            </ul>
            <button className={styles.clear} onClick={() => clearCompleted(todoAll, setTodoAll)}>
                Clear completed
            </button>
        </div>
    );
};

export default FilterBlock;
