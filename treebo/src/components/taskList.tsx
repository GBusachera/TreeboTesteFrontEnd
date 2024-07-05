import React, { useEffect, useState } from "react";
import TaskItem from "./taskItem";
import { getAllTasks } from "../services/treeboAPI-service";



const TaskList = () => {
    useEffect(() => { getTasks() }, []);
    const [tasks, setTasks] = useState([]);
    const getTasks = async () => {
        const response = await getAllTasks()
        const data = await response;
        setTasks(data);
    }

    return (
        <div className="grid gap-2">
            {tasks.map((task, index) => 
                <TaskItem key={index} task={task} />
            )}
        </div>
    );
}

export default TaskList;