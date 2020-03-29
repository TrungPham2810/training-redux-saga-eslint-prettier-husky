import React, { Component } from "react";
import loadingIcon from "../../assets/images/loading.gif";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import PropTypes from "prop-types";
import * as uiActions from "../../actions/ui";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
class GlobalLoading extends Component {
    render() {
        const { classes, showLoading } = this.props;
        let xhtml = null;
        if (showLoading) {
            xhtml = (
                <div className={classes.globalLoading}>
                    <img
                        src={loadingIcon}
                        className={classes.icon}
                        alt="Loading"
                    />
                </div>
            );
        }
        return xhtml;
    }
}
GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
    return {
        showLoading: state.ui.showLoading
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(GlobalLoading);
