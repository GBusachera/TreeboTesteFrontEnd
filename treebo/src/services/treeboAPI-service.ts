import axios from "axios";

const API_URL = "http://localhost:3001/task"

const getAllTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const createTask = async (data: any) => {
    try {
        const response = await axios.post(`${API_URL}`, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const editTask = async (data: any, id: number) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const delTask = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export { getAllTasks, createTask, editTask, delTask };