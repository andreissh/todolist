import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Main.module.scss";
import InputBlock from "./InputBlock";
import NotesList from "./NotesList";
import FilterBlock from "./FilterBlock";

const Main = () => {
    const [todoAll, setTodoAll] = useState([]);
    const [todoFiltered, setTodoFiltered] = useState([]);
    const filter = useRef();

    useEffect(() => {
        setTodoFiltered([...todoAll]);
    }, [todoAll]);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>todos</h1>
                <div className={styles.todolist}>
                    <InputBlock todoAll={todoAll} setTodoAll={setTodoAll} />
                    <NotesList todoFiltered={todoFiltered} todoAll={todoAll} setTodoAll={setTodoAll} />
                    <FilterBlock
                        todoAll={todoAll}
                        setTodoAll={setTodoAll}
                        setTodoFiltered={setTodoFiltered}
                        filter={filter}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
