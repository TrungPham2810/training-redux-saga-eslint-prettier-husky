import * as Types from "./../constants/task";
import {STATUSES} from "./../constants/index"
// import * as taskApis from "./../apis/task";

// export const fetchListTaskRequest = tasks => {
//     return dispatch => {
//         // dispatch(fetchResetListTask());
//         taskApis
//             .getList()
//             .then(res => {
//                 // console.log("data:", res.data);
//                 dispatch(fetchListTaskSuccess(res.data));
//             })
//             .catch(error => {
//                 console.log("error : ", error);

//                 dispatch(fetchListTaskFalse(error));
//             });
//     };
// };

export const fetchResetListTask = (params = {}) => {
    return {
        type: Types.FETCH_TASK_RESET,
        payLoad: {
            params
        }
    };
};

export const fetchListTaskSuccess = data => {
    return {
        type: Types.FETCH_TASK_SUCCESS,
        payLoad: {
            data
        }
    };
};

export const fetchListTaskFalse = error => {
    return {
        type: Types.FETCH_TASK_FALSE,
        payLoad: {
            error
        }
    };
};

export const filterTask = keyWord => {
    return {
        type: Types.FILTER_TASK,
        payLoad: {
            keyWord
        }
    };
};

export const filterTaskSuccess = data => {
    return {
        type: Types.FILTER_TASK_SUCCESS,
        payLoad: {
            data
        }
    };
};

export const addTask = (title, description) => {
    return {
        type: Types.ADD_TASK,
        payLoad: {
            title,
            description
        }
    };
};

export const addTaskSuccess = data => {
    return {
        type: Types.ADD_TASK_SUCCESS,
        payLoad: {
            data
        }
    };
};

export const addTaskFalse = error => {
    return {
        type: Types.ADD_TASK_FALSE,
        payLoad: {
            error
        }
    };
};

export const setTaskEditing = task => {
    return {
        type: Types.SET_TASK_EDITING,
        payLoad: {
            task
        }
    };
};

export const updateTask = (title, description, status = STATUSES[0].value) => {
    return {
        type: Types.UPDATE_TASK,
        payLoad: {
            title,
            description,
            status
        }
    };
};

export const updateTaskSuccess = data => {
    return {
        type: Types.UPDATE_TASK_SUCCESS,
        payLoad: {
            data
        }
    };
};

export const updateTaskFalse = error => {
    return {
        type: Types.UPDATE_TASK_FALSE,
        payLoad: {
            error
        }
    };
};

export const deleteTask = (id) => {
    return {
        type: Types.DELETE_TASK,
        payLoad: {
           id
        }
    };
};

export const deleteTaskSuccess = id => {
    return {
        type: Types.DELETE_TASK_SUCCESS,
        payLoad: {
            id
        }
    };
};

export const deleteTaskFalse = error => {
    return {
        type: Types.DELETE_TASK_FALSE,
        payLoad: {
            error
        }
    };
};
