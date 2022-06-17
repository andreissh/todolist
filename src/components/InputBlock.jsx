import React, { useRef, useState } from "react";
import { addTodo } from "../functions/addTodo";
import styles from "../styles/InputBlock.module.scss";

const InputBlock = ({ todoAll, setTodoAll }) => {
    const [todo, setTodo] = useState("");
    const text = useRef();

    const onKeyDown = (e) => {
        if (e.keyCode === 13) addTodo(todo, setTodo, text, todoAll, setTodoAll);
    };

    return (
        <div className={styles.inputBlock}>
            <input
                className={styles.input}
                placeholder="What needs to be done?"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={onKeyDown}
                ref={text}
            ></input>
            <button className={styles.btn} onClick={() => addTodo(todo, setTodo, text, todoAll, setTodoAll)}></button>
        </div>
    );
};

export default InputBlock;
