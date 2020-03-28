import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Route } from "react-router-dom";
class AdminLayoutRoute extends Component {
    render() {
        const { route} = this.props;

        return (

            <Route
                path={route.path}
                component={route.component}
            />
        )
    }
}

export default withStyles(styles)(AdminLayoutRoute);
