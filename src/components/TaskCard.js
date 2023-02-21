
export const TaskCard = ({task, handleDelete, others}) => {
    return (
        <>
            <li className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id} - {task.name} - {others}</span>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
        </>
    )
}
