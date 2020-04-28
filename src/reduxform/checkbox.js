import React from "react";
import { FormControlLabel, Checkbox, FormHelperText } from "@material-ui/core";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderCheckbox = ({ meta: { touched, error }, label, input }) => (
  <div error={touched && error}>
    <FormControlLabel
      error={touched && error}
      control={
        <Checkbox checked={input ? { label } : ""} onChange={input.onChange} />
      }
      label={label}
      renderFromHelper={(touched, error)}
    />
    {renderFromHelper({ touched, error })}
  </div>
);

export default renderCheckbox;
