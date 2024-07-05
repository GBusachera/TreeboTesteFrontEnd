import React from "react";

const EditTaskForm = () => {
    return (
        <form>
            <input type="text" placeholder="Task Title" />
            <textarea placeholder="Task Description" />
            <button type="submit">Update Task</button>
        </form>
    );
}

export default EditTaskForm;