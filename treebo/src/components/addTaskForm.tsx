import React from "react";
import { createTask } from "../services/treeboAPI-service";
import TaskType from "../services/dto/task.type";

const AddTaskForm = () => {


    const cTask = async (e: any) => {
        e.preventDefault();
        const task : TaskType = {
            name: e.target.name.value,
            description: e.target.description.value,
            status: false
        }
        const response = await createTask(task)
        const data = await response;
        console.log(data);
    }

    return (
        <form onSubmit={cTask} className="border-white border-2 rounded-lg flex flex-col gap-2 p-2 mb-5">
            <input name="name" type="text" placeholder="Nome" className="text-black rounded-md"/>
            <textarea name="description" placeholder="Descrição" className="text-black rounded-md" />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AddTaskForm;