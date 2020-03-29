import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from "prop-types";

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return true;
    }
    return <FormHelperText>{touched && error}</FormHelperText>;
};
const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select native {...input} {...custom}>
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
);
renderSelectField.propTypes = {
    label: PropTypes.string,
    meta: PropTypes.object,
    input: PropTypes.object,
    children: PropTypes.object,
    error: PropTypes.object,
    touched: PropTypes.object
};

export default renderSelectField;
