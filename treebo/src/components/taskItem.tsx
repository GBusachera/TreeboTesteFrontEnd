import React, { useState } from "react";

const TaskItem = (props: any) => {

    const task = props.task
    const [show, setShow] = useState<boolean>()

    const onclick = () => {
        if (show == false) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    return (
        <div className="p-6 border-color-black">
            <h1>{task.name}</h1>
            <button type="button" onClick={onclick}>Descrição</button>
            {show && (<p>{task.description}</p>)}
        </div>
    );
}

export default TaskItem;