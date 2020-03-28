import {
    fork,
    take,
    call,
    put,
    delay,
    takeLatest,
    select,
    takeEvery
} from "redux-saga/effects";
import * as taskType from "./../constants/task";

import { getList, addTask, updateTask, deleteTask } from "./../apis/task";
import { STATUS_CODE, STATUSES } from "./../constants/index";
import {
    fetchListTaskSuccess,
    fetchListTaskFalse,
    filterTaskSuccess,
    fetchResetListTask,
    addTaskSuccess,
    addTaskFalse,
    updateTaskSuccess,
    updateTaskFalse,
    deleteTaskSuccess,
    deleteTaskFalse
} from "../actions/task";
import {hideModal} from "../actions/modal";
import { showLoading, hideLoading } from "../actions/ui";

/**
 * B1: thực thi action fetch_ták_reset
 * B2: call Api
 * B3: check status của api
 * B4: nếu thành công thì chạy... nếu thất bại thì chạy ....
 * B5: thực thi các công việc tiếp theo
 */
function* watchFetchListTaskAction() {
    while (true) {
        const action = yield take(taskType.FETCH_TASK_RESET);

        const params = action.payLoad.params;

        yield put(showLoading());
        const res = yield call(getList, params);
        const { data, status } = res;

        if (status === STATUS_CODE.SUCCESS) {
            // dispatch action fetchListTaskSuccess
            yield put(fetchListTaskSuccess(res.data));

        } else {
            // dispatch action fetchListTaskFalse
            yield put(fetchListTaskFalse(data));
        }
        yield delay(500);
        yield put(hideLoading());

    }
}

function* filterTaskSaga({ payLoad }) {
    yield delay(500);
    const { keyWord } = payLoad;
    yield put(fetchResetListTask({q:keyWord}));

    // const list = yield select(state => state.task.listTask);
    // const filteredTask = list.filter(task =>
    //     task.title
    //         .trim()
    //         .toLowerCase()
    //         .includes(keyWord.trim().toLowerCase())
    // );
    // yield put(filterTaskSuccess(filteredTask));
}

function* addTaskSaga({payLoad}) {
    const {title, description} = payLoad;
    yield put(showLoading());
    const resp = yield call(addTask, {
        title,
        description,
        status:STATUSES[0].value
    });

    const { data, status } = resp;
    console.log('resp', resp);

    if (status === STATUS_CODE.CREATED) {
        yield put(hideModal());
        yield put(addTaskSuccess(resp.data));

    } else {
        yield put(addTaskFalse(data));
    }
    yield delay(500);
    yield put(hideLoading());

}

function * updateTaskSaga({payLoad}) {
    const { title, description, status } = payLoad;
    const id = yield select(state => state.task.taskEditing.id);
    yield put(showLoading());
    const resp = yield call(updateTask, {title, description, status}, id);
    const { data, status: statusCode } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
        // dispatch action fetchListTaskSuccess
        yield put(hideModal());
        yield put(updateTaskSuccess(resp.data));

    } else {
        // dispatch action fetchListTaskFalse
        yield put(updateTaskFalse(data));
    }
    yield delay(1000);
    yield put(hideLoading());
}

function * deleteTaskSaga({payLoad}) {
    const { id } = payLoad;
    yield put(showLoading());
    const resp = yield call(deleteTask, id);
    const { data, status: statusCode } = resp;
    console.log(resp);

    if (statusCode === STATUS_CODE.SUCCESS) {
        // dispatch action fetchListTaskSuccess
        yield put(hideModal());
        yield put(deleteTaskSuccess(id));

    } else {
        // dispatch action fetchListTaskFalse
        yield put(deleteTaskFalse(data));
    }
    yield delay(1000);
    yield put(hideLoading());
}
// function này đc return ra ngoài  để các file khác sử dụng. sẽ đc khai báo trong file cấu hình store của redux để dùng cho
// việc run saga
function* rootSaga() {
    // console.log("this is  root saga");
    yield fork(watchFetchListTaskAction);
    yield takeLatest(taskType.FILTER_TASK, filterTaskSaga);
    yield takeEvery(taskType.ADD_TASK, addTaskSaga);
    yield takeLatest(taskType.UPDATE_TASK, updateTaskSaga);
    yield takeLatest(taskType.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
