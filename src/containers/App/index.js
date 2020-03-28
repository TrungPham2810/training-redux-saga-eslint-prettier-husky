import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./../../commons/Theme/index";
import configureStore from "./../../redux/configureStore";
import { Provider } from "react-redux";
import GlobalLoading from "./../../components/GlobalLoading/index";
import Modal from "./../../components/Modal/index";
import Taskboard from "../Taskboard";
import { BrowserRouter, Switch } from "react-router-dom";
import { ADMIN_ROUTES } from "../../constants";
import AdminLayoutRoute from "./../../commons/Layout/AdminLayoutRoute";
const store = configureStore();
class App extends Component {
    renderAdminRoutes() {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map(route => {
            return <AdminLayoutRoute key = {route.path} path= {route.path} component={route.component} exact = {route.exact}/>;
        });

        return xhtml;
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        {/* <Taskboard /> */}
                        <GlobalLoading />
                        <Modal />
                        <Switch>{this.renderAdminRoutes()}</Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
