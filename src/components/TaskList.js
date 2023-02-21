import React from 'react'
import { useState } from "react";

export const TaskList = (props) => {
    const [tasks, setTasks] = useState([
        { id: 132, name: 'record', completed: true },
        { id: 223, name: 'allen', completed: false },
        { id: 312, name: 'siya', completed: false }
    ]);

    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => id!==task.id))
        // console.log(id);
      }
    return (
        <>
            <h1>Task List{props.title}</h1>
            <ul>
                <button onClick={() => setShow(!show)}>trigger</button>
                {show && tasks.map((task) => (
                    // we need a unique key value
                    <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
