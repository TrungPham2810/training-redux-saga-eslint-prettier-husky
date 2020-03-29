import React, { Component } from "react";
import { Provider } from "react-redux";
import theme from "../../commons/Theme/index";
import { BrowserRouter, Switch } from "react-router-dom";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import configureStore from "../../redux/configureStore";
import GlobalLoading from "../../components/GlobalLoading/index";
import Modal from "../../components/Modal/index";
import { ADMIN_ROUTES } from "../../constants";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import styles from "./styles";

const store = configureStore();
class App extends Component {
    renderAdminRoutes = () => {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map(route => {
            return (
                <AdminLayoutRoute
                    key={route.path}
                    name={route.name}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
            );
        });

        return xhtml;
    };
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
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
