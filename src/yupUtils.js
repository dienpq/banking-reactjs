import * as yup from "yup";

export const checkBoxRequired = (errorMessage) => {
    return yup.object().test(`test-check-type`, errorMessage, function (obj) {
        const { path, createError } = this;

        return (
            Object.values(obj).some(value => value === true) ||
            createError({ path, message: errorMessage })
        );
    });
};
