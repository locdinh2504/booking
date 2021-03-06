import { Grid, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../reduxform/index";
import renderSelectField from "../../reduxform/select";
import radioButton from "../../reduxform/radio";
import renderSelectFieldPrice from "../../reduxform/selectPrice";
import renderCheckbox from "../../reduxform/checkbox";
import * as taskActionsCreators from "../../actions/index";
import * as modalActiosnCreators from "../../actions/modal";
import style from "./style";

const validate = (values) => {
  const errors = {};
  const requiredFields = ["roomName", "hotelName", "quantity", "price"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (values.quantiy > 10) {
    errors.quantity = "Please under 10";
  }

  return errors;
};

class TaskFormEdit extends Component {
  handleSubmitForm = (data) => {
    console.log("data submit :", data);
    const { taskActionsCreators } = this.props;
    const { updatetask, fetchdata } = taskActionsCreators;
    updatetask(data);
    fetchdata();
  };

  renderEditing = () => {
    let xhtml = null;
    const { roomEditing, status } = this.props;
    if (roomEditing && roomEditing.id) {
      xhtml = (
        <div>
          <Field name="roomName" component={renderSelectField} label="roomName">
            <option value=""></option>
            <option value={status.roomName}>{status.roomName}</option>
          </Field>
        </div>
      );
    }

    return xhtml;
  };

  showForm = () => {
    const {
      classes,
      hotel,
      room,
      price,
      hidemodal,
      roomEditing,
      status,
    } = this.props;

    return (
      <Grid container>
        <Grid item md={12}>
          <div>
            <Field value="hotel" component="h1" name="hotel">
              {status.hotelName}
            </Field>
          </div>
          {/* hotel name */}
          <div>
            <Field
              name="hotelName"
              hotel={status.hotelName}
              error
              component={radioButton}
            ></Field>
          </div>

          {/* //Quantity/// */}
          <div className={classes.quantityContent}>
            <Field
              name="quantity"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              label="Quantity"
              component={renderTextField}
              value={roomEditing.quantity}
            ></Field>
          </div>
          {/* ///price/// */}
          <div>
            <Field
              name="price"
              component={renderSelectFieldPrice}
              label="price"
            >
              <option value=""></option>
              <option value={status.price}>{status.price}</option>
            </Field>
          </div>

          {/* ///render editing select //// */}
          {this.renderEditing()}
          {/* notes  */}
          <div>
            <Field
              className={classes.TextField}
              name="notes"
              component={renderTextField}
              label="Notes"
              multiline
              rowsMax="4"
              margin="normal"
              value={roomEditing.notes}
            />
          </div>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="small"
              className={classes.buttonSubmit}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              type="button"
              size="small"
              onClick={hidemodal}
            >
              Cancle
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  };

  render() {
    const {
      classes,
      hidemodal,
      handleSubmit,
      room,
      hotel,
      roomEditing,
    } = this.props;

    return (
      <form
        className={classes.container}
        onSubmit={handleSubmit(this.handleSubmitForm)}
      >
        {this.showForm()}
      </form>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    listRoom: state.task.listRoom,
    roomEditing: state.task.roomEditing,
    initialValues: {
      quantity: state.task.roomEditing ? state.task.roomEditing.quantity : null,
      notes: state.task.roomEditing ? state.task.roomEditing.notes : null,
      roomName: state.task.roomEditing ? state.task.roomEditing.roomName : null,
      price: state.task.roomEditing ? state.task.roomEditing.price : null,
      hotelName: state.task.roomEditing
        ? state.task.roomEditing.hotelName
        : null,
    },
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    taskActionsCreators: bindActionCreators(taskActionsCreators, dispatch),
    modalActiosnCreators: bindActionCreators(modalActiosnCreators, dispatch),
  };
};

const withconnect = connect(mapStatetoProps, mapDispatchtoProps);

const FORM_NAME = "TASK_FORM";

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withconnect,
  withReduxForm,
  withStyles(style)
)(TaskFormEdit);
