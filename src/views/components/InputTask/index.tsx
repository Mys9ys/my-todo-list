import React, {useCallback, useEffect, useState} from "react";
import styles from './index.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, value: string) => void;
    onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> =
    ({
         id,
         title,
         onDone,
         onEdited,
         onRemoved
     }) => {

        return (
            <div className={styles.inputTask}>
                1234
            </div>
        )
    };