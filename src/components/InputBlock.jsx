import React, { useRef, useState } from "react";
import { addTodo } from "../functions/addTodo";
import styles from "../styles/InputBlock.module.scss";

const InputBlock = ({ todoAll, setTodoAll }) => {
    const [todo, setTodo] = useState("");
    const text = useRef();
    const addTodoData = [todo, setTodo, todoAll, setTodoAll, text];

    const onKeyDown = (e) => {
        if (e.keyCode === 13) addTodo(...addTodoData);
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
            <button className={styles.btn} onClick={() => addTodo(...addTodoData)}></button>
        </div>
    );
};

export default InputBlock;
