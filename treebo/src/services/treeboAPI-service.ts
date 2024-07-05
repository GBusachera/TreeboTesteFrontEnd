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

export { getAllTasks };