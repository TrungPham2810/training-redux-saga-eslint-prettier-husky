import React, { Component } from 'react'
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
class SearchBox extends Component {
    render() {
        const {classes, handleChange} = this.props;
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField id="standard-basic" margin="normal" className={classes.textField} onChange={handleChange} placeholder='Search' />
                </form>
            </div>
        )
    }
}

SearchBox.propsTypes = {
    classes:PropTypes.object,
    handleChange: PropTypes.func
}
export default withStyles(styles)(SearchBox);
