import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import { ADMIN_ROUTES } from "./../../../constants/index";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import ListItemText from "@material-ui/core/ListItemText";
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    toggleDrawer = value => {
        this.setState({
            open: value
        });
    };

    renderList = () => {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <div className={classes.list}>
                <List component="div">
                    {ADMIN_ROUTES.map(route => {
                        return (
                            <ListItem
                                // selected={true}
                                key={route.path}
                                button
                            >
                                <Link to={route.path}>{route.name}</Link>
                            </ListItem>
                        );

                        //   <ListItem key={route.path}>{<Link to={route.path}>{route.name}</Link> }</ListItem>
                    })}
                </List>
            </div>
        );

        return xhtml;
    };
    render() {
        const { open } = this.state;
        const { classes } = this.props;
        return (
            <Drawer
                variant="persistent"
                open={open}
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

SideBar.propsTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(SideBar);
