import qs from "query-string";
import axiosService from "../commons/axiosService";
import { API_URL } from "../constants/index";

const url = "task";
// http://localhost:3000/task    GET
export const getList = (params = {}) => {
    let urlParams = "";
    if (Object.keys(params).length > 0) {
        urlParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_URL}/${url}${urlParams}`);
};
// http://localhost:3000/task      POST
export const addTask = data => {
    return axiosService.post(`${API_URL}/${url}`, data);
};

// http://localhost:3000/task/id     PUT
export const updateTask = (data, taskId) => {
    return axiosService.put(`${API_URL}/${url}/${taskId}`, data);
};

// http://localhost:3000/task/id     Delete
export const deleteTask = taskId => {
    return axiosService.delete(`${API_URL}/${url}/${taskId}`);
};
