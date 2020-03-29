import React, { Component } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "../../actions/ui";
import cn from "classnames";
import Proptypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
class DashBoard extends Component {
    changeSidebarStatus = () => {
        const { showSidebar: sideBarStatus, uiActionsCreator } = this.props;

        const { showSidebar, hideSidebar } = uiActionsCreator;

        if (sideBarStatus) {
            hideSidebar();
        } else {
            showSidebar();
        }
    };

    render() {
        const { children, name, classes, showSidebar } = this.props;

        return (
            <div>
                <div className={classes.header}>
                    <Header
                        name={name}
                        changeSidebarStatus={this.changeSidebarStatus}
                    />
                </div>

                <div className={classes.wrapper}>
                    <SideBar
                        showSidebar={showSidebar}
                        changeSidebarStatus={this.changeSidebarStatus}
                    />
                    <div
                        className={cn(classes.content, {
                            [classes.shiftLeft]: showSidebar === false
                        })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
DashBoard.propTypes = {
    name: Proptypes.string,
    children: Proptypes.object,
    classes: Proptypes.object,
    showSidebar: Proptypes.bool,
    uiActionsCreator: Proptypes.shape({
        showSidebar: Proptypes.func,
        hideSidebar: Proptypes.func
    })
};
const mapStateToProps = (state, ownProps) => {
    return {
        showSidebar: state.ui.showSidebar
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        uiActionsCreator: bindActionCreators(uiActions, dispatch)
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(DashBoard);
