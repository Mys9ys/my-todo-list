import create, {State, StateCreator} from "zustand";

import {generateId} from "../helpers";

interface Task {
    id: string;
    title: string;
    createdAt: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}

function isToDoStore(object: any): object is ToDoStore {
    return 'tasks' in Object;
}


const localStorageUpdate = <T extends State>(config: StateCreator<T>):
    StateCreator<T> => (set, get, api) => config((nextState, ...args) => {
        if(isToDoStore(nextState)){
            window.localStorage.setItem('tasks', JSON.stringify(
                nextState.tasks
            ))
        }
        set(nextState, ...args);
}, get, api);

export const useToDoStore = create<ToDoStore>((set, get) => ({
    tasks: [
        // {
        //     id: '343535',
        //     title: 'fdgg',
        //     createdAt: 35353
        // }
    ],
    createTask: (title) => {
        const {tasks} = get()
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now()
        }

        set({
            tasks: [newTask].concat(tasks),
        })
    },
    updateTask: (id, title) => {
        const {tasks} = get();
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title
            }))
        });
    },
    removeTask: (id) => {
        const {tasks} = get();
        set({
            tasks: tasks.filter((task) => task.id !== id)
        });
    },
}));
