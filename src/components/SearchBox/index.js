import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <div>
                <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        margin="normal"
                        className={classes.textField}
                        onChange={handleChange}
                        placeholder="Search"
                    />
                </form>
            </div>
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
};
export default withStyles(styles)(SearchBox);
