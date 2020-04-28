import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import loading from "./../GlobalLoading/global_loading.gif";
import style from "./style";
import { compose } from "redux";
import { connect } from "react-redux";

class GlobalLoading extends Component {
  render() {
    var { classes, showloading } = this.props;
    var xhtml = null;
    if (showloading) {
      xhtml = (
        <div className={classes.global}>
          <img className={classes.icon} src={loading} atl="loading" />
        </div>
      );
    }
    return xhtml;
  }
}

const mapStatetoProps = state => {
  return {
    showloading: state.ui.showloading
  };
};

const withUI = connect(mapStatetoProps, null);

export default compose(withStyles(style), withUI)(GlobalLoading);
