import React, { Component } from "react";
import { withStyles, Modal } from "@material-ui/core";
import style from "./style";
import TaskForm from "../TaskForm";
import { connect } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { compose, bindActionCreators } from "redux";
import * as modalActionCreators from "./../../actions/modal";

class ModalBoard extends Component {
  render() {
    const { classes, open, modalActionCreators, component, title } = this.props;
    const { handleClose, hidemodal } = modalActionCreators;
    return (
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <ClearIcon className={classes.icon} onClick={hidemodal}></ClearIcon>
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

const mapStatetoProps = state => {
  return {
    open: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActionCreators, dispatch)
  };
};

const withconnect = connect(mapStatetoProps, mapDispatchtoProps);

export default compose(withconnect, withStyles(style))(ModalBoard);
