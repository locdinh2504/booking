import { Grid, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../reduxform/index";
import radioButton from "../../reduxform/radio";
import renderSelectField from "../../reduxform/select";
import renderSelectFieldPrice from "../../reduxform/selectPrice";
import * as taskActionsCreators from "./../../actions/index";
import * as modalActiosnCreators from "./../../actions/modal";
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

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    // const { hotel, include1, include2, storage, price, quantity, notes } = data;

    const { taskActionsCreators, modalActiosnCreators } = this.props;
    const { addtask, fetchdata } = taskActionsCreators;
    const { hidemodal } = modalActiosnCreators;

    addtask(data);
    fetchdata();
    hidemodal();
  };

  showForm = () => {
    const { classes, hotel, room, price, hidemodal } = this.props;

    return (
      <Grid container>
        <Grid item md={12}>
          <div>
            <Field value="hotel" component="h1" name="hotel">
              {hotel} - {room}
            </Field>
          </div>
          {/* hotel name */}
          <div>
            <Field
              name="hotelName"
              hotel={hotel}
              error
              component={radioButton}
            ></Field>
          </div>
          {/* room name */}
          <div>
            <Field
              name="roomName"
              component={renderSelectField}
              label="roomName"
            >
              <option value=""></option>
              <option value={room}>{room}</option>
            </Field>
          </div>
          {/* //Quantity/// */}
          <div className={classes.quantityContent}>
            <Field
              name="quantity"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              label="Quantity"
              component={renderTextField}
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
              <option value={price}>
                {new Intl.NumberFormat("ja-JP", {
                  style: "currency",
                  currency: "JPY",
                }).format(price)}
              </option>
            </Field>
          </div>

          {/* include 1 2 */}
          <div className={classes.includeContent}></div>
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
    const { classes, hidemodal, handleSubmit, room, hotel } = this.props;

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

export default compose(withconnect, withReduxForm, withStyles(style))(TaskForm);
