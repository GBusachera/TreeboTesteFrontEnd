import React, { useState } from "react";
import TaskType from "../services/dto/task.type";
import { editTask } from "../services/treeboAPI-service";

const EditTaskForm = (props: any) => {

    const task = props.task;
    const [values, setValues] = useState(task)
    const id = task.id;

    const eTask = async (e: any) => {
        e.preventDefault();
        const task: TaskType = {
            name: e.target.name.value,
            description: e.target.description.value,
            status: e.target.status.checked
        }
        const response = await editTask(task, id)
        const data = await response;
        console.log(data);
    }

    return (
        <form onSubmit={eTask} className="rounded-lg flex flex-col gap-2 p-2 mb-5">
            <input name="name" type="text" onChange={(e: any) => setValues({ ...values, name: e.target.value })} value={values.name} className="text-black rounded-md" />
            <textarea name="description" onChange={(e: any) => setValues({ ...values, description: e.target.value })} value={values.description} className="text-black rounded-md" />
            <div className="flex gap-1">
                <input defaultChecked={values.status} name="status" type="checkbox" className="text-black rounded-md" />
                <p>Completa</p>
            </div>
            <button type="submit">Editar</button>
        </form>
    )
}

export default EditTaskForm;