import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import { compose } from "redux";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const radioButton = ({
  status,
  hotel,
  meta: { touched, error },
  input,
  ...rest
}) => (
  <FormControl error={touched && error}>
    <RadioGroup {...input} {...rest}>
      <p>Resort</p>
      <FormControlLabel
        value={hotel}
        control={<Radio />}
        label={hotel}
        error={touched && error}
      />
      {renderFromHelper({ touched, error })}
    </RadioGroup>
  </FormControl>
);

export default radioButton;
