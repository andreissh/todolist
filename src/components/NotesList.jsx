import React from "react";
import { checkTodo } from "../functions/checkTodo";
import styles from "../styles/NotesList.module.scss";

const NotesList = ({ todoFiltered, todoAll, setTodoAll }) => {
    return (
        <div className={styles.list}>
            {todoFiltered.map((note, i) => {
                return (
                    <div className={styles.listItem} key={`#${i + 1}`}>
                        <input
                            id={`#${i + 1}`}
                            type="checkbox"
                            className={styles.itemCheckbox}
                            onChange={() => checkTodo(note.todo, todoAll, setTodoAll)}
                            checked={note.checked}
                        ></input>
                        <span className={styles.itemChecked}></span>
                        <label htmlFor={`#${i + 1}`} className={styles.itemLabel}>
                            {note.todo}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default NotesList;
