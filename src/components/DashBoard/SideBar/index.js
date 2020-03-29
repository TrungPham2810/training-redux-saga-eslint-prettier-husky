import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ADMIN_ROUTES } from "../../../constants/index";
import styles from "./styles";

class SideBar extends Component {
    renderList = () => {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <div className={classes.list}>
                <List component="div">
                    {ADMIN_ROUTES.map(route => {
                        return (
                            <NavLink
                                to={route.path}
                                key={route.path}
                                exact={route.exact}
                                className={classes.link}
                                activeClassName={classes.menuLinkactive}
                            >
                                <ListItem className={classes.menuItem} button>
                                    {route.name}
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </List>
            </div>
        );

        return xhtml;
    };

    render() {
        const { classes, showSidebar } = this.props;
        return (
            <Drawer
                variant="persistent"
                open={showSidebar}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object,
    showSidebar: PropTypes.bool
};

export default withStyles(styles)(SideBar);
