import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Route } from "react-router-dom";
import DashBoard from "../../../components/DashBoard";
import PropTypes from "prop-types";
class AdminLayoutRoute extends Component {
    render() {
        const { path, component: YourComponent, exact, name } = this.props;
        return (
            <Route
                path={path}
                exact={exact}
                render={routerProps => {
                    return (
                        <DashBoard name={name}>{<YourComponent />}</DashBoard>
                    );
                }}
            />
        );
    }
}
AdminLayoutRoute.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
export default withStyles(styles)(AdminLayoutRoute);
