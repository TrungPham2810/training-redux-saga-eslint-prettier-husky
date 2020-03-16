import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import Grid from "@material-ui/core/Grid";
import { STATUSES } from "./../../constants/index";

import TaskList from "./../../components/TaskList";

import TaskForm from "./../../components/TaskForm";
const listTask = [
  {
    id: 1,
    title: "Read Book",
    description: "xxxxxx",
    status: 0
  },
  {
    id: 2,
    title: "Swim",
    description: "tttttt",
    status: 1
  },
  {
    id: 3,
    title: "Run",
    description: "ewwwwwwww",
    status: 2
  },
  {
    id: 4,
    title: "Read Book",
    description: "xxxxxx",
    status: 0
  },
  {
    id: 5,
    title: "Swim",
    description: "tttttt",
    status: 1
  },
  {
    id: 6,
    title: "Run",
    description: "ewwwwwwww",
    status: 2
  }
];
class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  renderForm = () => {
    var { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };
  renderBoard() {
    let xhtml = null;
    const { classes } = this.props;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFilter = listTask.filter(
            task => task.status === status.value
          );
          return (
            <TaskList key={index} status={status} taskFilter={taskFilter} />
          );
        })}
      </Grid>
    );

    return xhtml;
  }
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
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
