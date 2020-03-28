import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "./../../actions/modal";
import { Field, reduxForm } from "redux-form";
import renderTextField from "./../../components/FormHelper/TextField";
import renderSelectField from "./../../components/FormHelper/Select";
import validate from "./validate";
import * as taskActions from "./../../actions/task";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    // autoClose: 3000,
    draggable: false,
    //etc you get the idea
  });

class TaskForm extends Component {

    handleSubmitForm = data => {
        const { taskActionsCreator, taskEditing } = this.props;
        const { addTask, updateTask} = taskActionsCreator;
        const { title, description, status} = data;

        if(taskEditing && taskEditing.id) {
            updateTask(title, description, +status);
        } else {
            addTask( title, description );
        }

    };

    required = value => {
        let error = "Please enter value";
        if (value !== null && value !== undefined && value.trim() !== "") {
            error = null;
        }
        return error;
    };

    minLength5 = value => {
        let error = "Min Length is 5";
        if (value.length > 5) {
            error = null;
        }
        return error;
    };
    renderStatusSelect = () => {
        const {taskEditing, classes} = this.props;
        let xhtml = '';
        if(taskEditing && taskEditing.id) {
            xhtml = (
                <Grid item md={12}>
                <Field

                    id="status"
                    name="status"
                    label="Status"
                    margin="dense"
                    component={renderSelectField}
                    className={classes.select}

                >
          <option value={+0}>Ready</option>
          <option value={+1}>In Processing</option>
          <option value={+2}>Complete</option>

                </Field>
            </Grid>
            );
        }

        return xhtml;
    }
    render() {
        const {
            modalActionsCreator,
            classes,
            handleSubmit,
            invalid,
            submitting,
        } = this.props;
        const { hideModal } = modalActionsCreator;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            id="title"
                            name="title"
                            label="Title"
                            margin="dense"
                            component={renderTextField}
                            className={classes.textField}

                        />
                    </Grid>

                    <Grid item md={12}>
                        <Field
                            name="description"
                            id="description"
                            label="Description"
                            margin="dense"
                            component={renderTextField}
                            className={classes.textField}

                        />
                    </Grid>
                    {this.renderStatusSelect()}

                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse">
                            <Box>
                                <Button
                                    variant="contained"
                                    onClick={hideModal}
                                    color="secondary"
                                >
                                    Cancel
                                </Button>
                            </Box>

                            <Box mr={1}>
                                <Button
                                    disabled={invalid || submitting}
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                >
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionsCreator: PropTypes.shape({
        hideModal: PropTypes.func
    }),
    taskActionsCreator: PropTypes.shape({
        addTask: PropTypes.func
    }),
    initialize: PropTypes.func,
    taskEditing: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    return {
        taskEditing: state.task.taskEditing,
        initialValues:state.task.taskEditing
    }

};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        modalActionsCreator: bindActionCreators(modalActions, dispatch),
        taskActionsCreator: bindActionCreators(taskActions, dispatch)
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const FORM_NAME = "TASK_MANAGEMENT";
const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate
});
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(TaskForm);
