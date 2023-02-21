import React from 'react'
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

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
            <h1>Task List-{props.info}</h1>
            <ul>
                <button onClick={() => setShow(!show)}>trigger</button>
                {show && tasks.map((task) => (
                    // we need a unique key value
                    <TaskCard  key={task.id} others={props.info} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
            <BoxCard result="success" others={props.info}>
                <p>Lorem, ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum, eos itaque consequatur voluptates sit atque ipsa? Voluptatibus, magnam maxime?</p>
            </BoxCard>
            <BoxCard result="alert">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sed!</p>
            </BoxCard>
        </>
    )
}
