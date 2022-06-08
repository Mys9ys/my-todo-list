import React, {useEffect} from "react";

import styles from './index.module.scss';
import {useToDoStore} from "../../data/stores/useToDoStore";

export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useToDoStore( state => [
       state.tasks,
       state.createTask,
       state.updateTask,
       state.removeTask
    ]);

    useEffect(()=>{
        createTask('title2')

    }, []);

    console.log('tasks', tasks)

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To do app</h1>
            <section className={styles.articleSection}>

            </section>
            <section className={styles.articleSection}></section>
        </article>
    );
}