import React from "react";
import { checkTodo } from "../functions/checkTodo";
import styles from "../styles/NotesList.module.scss";

const NotesList = ({ todoFiltered, todoAll, setTodoAll }) => {
    return (
        <div className={styles.list}>
            {todoFiltered.map((obj, i) => {
                return (
                    <div className={styles.listItem} key={`#${i + 1}`}>
                        <input
                            id={`#${i + 1}`}
                            type="checkbox"
                            className={styles.itemCheckbox}
                            onChange={() => checkTodo(obj.todo, todoAll, setTodoAll)}
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
    );
};

export default NotesList;
