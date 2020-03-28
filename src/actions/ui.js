import * as Types from "./../constants/ui";

export const showLoading = () => {
    return {
        type: Types.SHOW_LOADING
    };
};

export const hideLoading = () => {
    return {
        type: Types.HIDE_LOADING
    };
};
