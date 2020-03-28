import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    color: {
        primary: "#FF5252",
        secondary: "#4CAF50",
        error: "#FF5252"
    },
    typography: {
        fontFamily: "Roboto"
    },

    shape: {
        borderRadius: 4,
        backgroundColor: "#FFFF",
        textColor: "#FF5252"
    },

    palette: {
        background: {
            paper: "#FFFF"
        },
        primary: {
            main: "#007bff"
        }
    }
});
export default theme;
