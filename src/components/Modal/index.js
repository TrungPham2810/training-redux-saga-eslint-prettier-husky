import React, { Component } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import { Modal } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "./../../actions/modal";

class CommonModal extends Component {
    render() {
        const { classes, modal, modalActionsCreator } = this.props;
        const { showModal, title, component } = modal;
        const { hideModal } = modalActionsCreator;
        return (
            <Modal open={showModal} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>{title}</span>
                        <CloseIcon
                            onClick={hideModal}
                            className={classes.icon}
                        />
                    </div>
                    <div className={classes.content}>{component}</div>
                </div>
            </Modal>
        );
    }
}

CommonModal.propTypes = {
    classes: PropTypes.object,
    modal: PropTypes.object,
    modalActionsCreator: PropTypes.shape({
        hideModal: PropTypes.func
    })
};
const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.modal
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        modalActionsCreator: bindActionCreators(modalActions, dispatch)
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(CommonModal);
