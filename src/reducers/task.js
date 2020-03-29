import * as taskConstants from "../constants/task";
import { toastError, toastSuccess } from "../helpers/toasHelper";

const initialState = {
    listTask: [],
    taskEditing: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.FETCH_TASK_RESET: {
            return {
                ...state,
                listTask: []
            };
        }
        case taskConstants.FETCH_TASK_SUCCESS: {
            const { data } = action.payLoad;
            return {
                ...state,
                listTask: data
            };
        }
        case taskConstants.FETCH_TASK_FALSE: {
            const { error } = action.payLoad;

            toastError(error);
            return {
                ...state,
                listTask: []
            };
        }
        case taskConstants.FILTER_TASK_SUCCESS: {
            const { data } = action.payLoad;

            return {
                ...state,
                listTask: data
            };
        }
        case taskConstants.ADD_TASK: {
            return {
                ...state
            };
        }
        case taskConstants.ADD_TASK_SUCCESS: {
            const { data } = action.payLoad;
            toastSuccess("Add New Task Success");
            return {
                ...state,
                listTask: [data].concat(state.listTask)
            };
        }
        case taskConstants.ADD_TASK_FALSE: {
            const { error } = action.payLoad;
            toastError(error);
            return {
                ...state
            };
        }

        case taskConstants.UPDATE_TASK: {
            return {
                ...state
            };
        }
        case taskConstants.UPDATE_TASK_SUCCESS: {
            const { data } = action.payLoad;

            const { listTask } = state;
            const index = listTask.findIndex(item => item.id === data.id);

            if (index !== -1) {
                const newList = [
                    ...listTask.slice(0, index),
                    data,
                    ...listTask.slice(index + 1)
                ];
                toastSuccess("Update Task Success");
                return {
                    ...state,
                    listTask: newList
                };
            }
        }
        case taskConstants.UPDATE_TASK_FALSE: {
            const { error } = action.payLoad;
            toastError(error);
            return {
                ...state
            };
        }

        case taskConstants.SET_TASK_EDITING: {
            const { task } = action.payLoad;

            return {
                ...state,
                taskEditing: task
            };
        }

        case taskConstants.DELETE_TASK: {
            return {
                ...state
            };
        }
        case taskConstants.DELETE_TASK_SUCCESS: {
            const { id } = action.payLoad;
            toastSuccess("Delete Task Success");
            return {
                ...state,
                listTask: state.listTask.filter(item => item.id !== id)
            };
        }
        case taskConstants.DELETE_TASK_FALSE: {
            const { error } = action.payLoad;
            toastError(error);
            return {
                ...state
            };
        }

        default:
            return state;
    }
};
export default reducer;
