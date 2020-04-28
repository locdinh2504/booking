import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  withStyles,
} from "@material-ui/core";
import React from "react";
import style from "./style";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  price,
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error} className={classes.TextField}>
    <InputLabel htmlFor="age-native-simple">Confirm Room</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: "Room",
        id: "age-native-simple",
      }}
      error={touched && error}
      helpertext="Incorrect entry."
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

export default withStyles(style)(renderSelectField);
