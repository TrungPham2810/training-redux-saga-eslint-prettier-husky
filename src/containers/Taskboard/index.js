import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants/index";

import TaskList from "../../components/TaskList";

import TaskForm from "../TaskForm";
import SearchBox from "../../components/SearchBox";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import * as modalActions from "../../actions/modal";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

class Taskboard extends Component {
    componentDidMount() {
        const { taskActionCreators } = this.props;
        const { fetchResetListTask } = taskActionCreators;
        fetchResetListTask();
    }

    loadData = () => {
        const { taskActionCreators } = this.props;
        const { fetchResetListTask } = taskActionCreators;
        fetchResetListTask();
    };

    handleOpen = () => {
        const { taskActionCreators } = this.props;
        const { setTaskEditing } = taskActionCreators;
        setTaskEditing(null);
        const { modalActionsCreator } = this.props;
        const {
            showModal,
            changeModalTitle,
            changeModalContent
        } = modalActionsCreator;

        showModal();
        changeModalTitle("Add New Task");
        changeModalContent(<TaskForm />);
    };

    handleChange = event => {
        // console.log(event.target.value);
        const { taskActionCreators } = this.props;
        const { filterTask } = taskActionCreators;
        filterTask(event.target.value);
    };
    handleEditTask = task => {
        const { taskActionCreators, modalActionsCreator } = this.props;
        const { setTaskEditing } = taskActionCreators;
        setTaskEditing(task);

        const {
            showModal,
            changeModalTitle,
            changeModalContent
        } = modalActionsCreator;

        showModal();
        changeModalTitle("Edit Task");
        changeModalContent(<TaskForm />);
    };
    showModalDelete = task => {
        const { modalActionsCreator, classes } = this.props;

        const {
            hideModal,
            showModal,
            changeModalTitle,
            changeModalContent
        } = modalActionsCreator;

        showModal();
        changeModalTitle("Edit Task");
        changeModalContent(
            <div className={classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Are you sure delete{" "}
                    <span className={classes.modalConfirmTextBold}>
                        {task.title}
                    </span>
                    ?
                </div>

                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                        <Button variant="contained" onClick={hideModal}>
                            No
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleDeleteTask(task)}
                        >
                            Yes
                        </Button>
                    </Box>
                </Box>
            </div>
        );
    };

    handleDeleteTask = task => {
        const { taskActionCreators } = this.props;
        const { deleteTask } = taskActionCreators;
        deleteTask(task.id);
    };
    renderBoard() {
        let xhtml = null;
        const { listTask } = this.props;
        xhtml = (
            <Grid container spacing={2}>
                {STATUSES.map((status, index) => {
                    const taskFilter = listTask.filter(
                        task => task.status === status.value
                    );
                    return (
                        <TaskList
                            key={index}
                            status={status}
                            taskFilter={taskFilter}
                            onClickEdit={this.handleEditTask}
                            onClickDelete={this.showModalDelete}
                        />
                    );
                })}
            </Grid>
        );

        return xhtml;
    }

    renderSearchBox = () => {
        let xhtml = null;
        xhtml = <SearchBox handleChange={this.handleChange} />;
        return xhtml;
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleOpen}
                >
                    <AddIcon /> Add New Task
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.loadData}
                >
                    <AddIcon /> Load Data
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
            </div>
        );
    }
}

Taskboard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchResetListTask: PropTypes.func,
        filterTask: PropTypes.func,
        setTaskEditing: PropTypes.func
    }),
    modalActionsCreator: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func
    })
    // taskList: PropTypes.array
};
const mapStateToProps = (state, ownProps) => {
    return {
        listTask: state.task.listTask,
        showLoading: state.ui.showLoading,
        modal: state.modal
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
        modalActionsCreator: bindActionCreators(modalActions, dispatch)
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
