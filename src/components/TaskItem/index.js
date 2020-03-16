import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
class TaskItem extends Component {
  render() {
    var { task, label, classes } = this.props;
    return (
      <Card className={classes.taskItem}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
              <Typography component="p">{task.description}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography component="p">{label}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.fab}>
          <Fab color="primary" size="small" aria-label="delete">
            <DeleteIcon />
          </Fab>
          <Fab color="secondary" size="small" aria-label="edit">
            <EditIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
