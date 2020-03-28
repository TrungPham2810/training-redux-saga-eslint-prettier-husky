import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Route } from "react-router-dom";
import DashBoard from "../../../components/DashBoard";
class AdminLayoutRoute extends Component {

    render() {
        const { path, component:YourComponent, exact} = this.props;
        // const {component:YourComponent} = route;
        console.log('layout');

        return  <Route
                path = {path}
                exact= {exact}
                render ={ routerProps => {
                        return (
                            <DashBoard>
                                {<YourComponent/>}
                            </DashBoard>
                        )
                    }
                }
            />


    }
}

export default withStyles(styles)(AdminLayoutRoute);
