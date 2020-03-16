import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TaskItem from "./../TaskItem";

class TaskList extends Component {
  render() {
    var { status, taskFilter, classes } = this.props;

    return (
      <Grid item md={4} xs={12}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>
            <h1> {status.label}</h1>
          </div>
        </Box>

        <div className={classes.wrapperListTask}>
          {taskFilter.map((task, index) => {
            return <TaskItem task={task} key={index} label={status.label} />;
          })}
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskList);
