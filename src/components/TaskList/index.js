import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TaskItem from "./../TaskItem";
import PropTypes from "prop-types";
import styles from "./styles";
class TaskList extends Component {
    render() {
        var {
            status,
            taskFilter,
            classes,
            onClickEdit,
            onClickDelete
        } = this.props;
        return (
            <Grid item md={4} xs={12}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>
                        <h1> {status.label}</h1>
                    </div>
                </Box>

                <div className={classes.wrapperListTask}>
                    {taskFilter.map(task => {
                        return (
                            <TaskItem
                                task={task}
                                key={task.id}
                                label={status.label}
                                onClickEdit={() => onClickEdit(task)}
                                onClickDelete={() => onClickDelete(task)}
                            />
                        );
                    })}
                </div>
            </Grid>
        );
    }
}

TaskList.propTypes = {
    classes: PropTypes.object,
    status: PropTypes.object,
    taskFilter: PropTypes.array,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func
};
export default withStyles(styles)(TaskList);
