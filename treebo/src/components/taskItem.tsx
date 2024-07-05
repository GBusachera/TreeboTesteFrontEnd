import React, { useState } from "react";
import EditTaskForm from "./editTaskForm";
import { delTask } from "../services/treeboAPI-service";

const TaskItem = (props: any) => {

    const task = props.task
    const id = props.task.id
    const [show, setShow] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [del, setDel] = useState<boolean>(false)

    const dTask = async () => {
        const response = await delTask(id)
    }

    return (
        <div className="border-white border-2 rounded-lg">
            <div className="px-2 pt-2 flex justify-between ">
                <div className="flex gap-1">
                    <h1>{task.name}</h1>
                    {task.status === true ? <p className="text-lime-100"> - Completo</p> : <p className="text-neutral-500"> - Incompleto</p>}
                </div>
                <div className="flex gap-2">
                    <button type="button" className="px-1 bg-white text-neutral-700 rounded-md" onClick={() => { setEdit(!edit) }}>Editar</button>
                    <button type="button" className="px-1 bg-red-600 text-red-950 rounded-md" onClick={() => { setDel(!del) }}>Deletar</button>
                    {del && (
                        <div className="p-2 bg-neutral-800 rounded-md absolute">
                            <p>Deseja mesmo deletar</p>
                            <button className="p-2 text-neutral-300" type="button" onClick={() => { setDel(!del); dTask() }}>Confirmar</button>
                            <button className="p-2 text-red-600" type="button" onClick={() => { setDel(!del) }}>Cancelar</button>
                        </div>
                    )}
                </div>
            </div>
            <button className="p-2 text-blue-300" type="button" onClick={() => { setShow(!show) }}>Descrição</button>

            {show && (
                <div className="mx-3 w-100 h-px bg-white mx-auto"></div>
            )}
            {show && (
                <div className="m-2 p-2 bg-neutral-800 rounded-md">
                    <p>{task.description}</p>
                </div>
            )}
            {edit && (
                <EditTaskForm task={task} />
            )}
        </div>
    );
}

export default TaskItem;