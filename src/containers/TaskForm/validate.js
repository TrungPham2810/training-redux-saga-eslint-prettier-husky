const validate = values => {
    const errors = {};

    const { title } = values;
    if (title === null || typeof title === "undefined" || title.trim() === "") {
        errors.title = "Please enter title";
    } else if (title.trim().length < 5) {
        errors.title = "Min length is 5";
    }
    return errors;
};

export default validate;
