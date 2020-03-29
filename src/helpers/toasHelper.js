import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastError = error => {
    let message = null;
    if (typeof error === "object" && error.message) {
        message = error.message;
    }
    if (message !== null && typeof message !== "undefined" && message !== "") {
        toast.error(message);
    }
};

export const toastSuccess = infoSuccess => {
    if (
        infoSuccess !== null &&
        typeof infoSuccess !== "undefined" &&
        infoSuccess !== ""
    ) {
        toast.success(infoSuccess, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    } else {
        toast.success("Success");
    }
};
