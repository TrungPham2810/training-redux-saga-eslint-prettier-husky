const styles = theme => ({
    wrapper: {
        display: "flex",
        flexDirection: "row"
    },
    content: {
        width: "100%",
        padding: 10,
        transition: theme.transitions.create(["margin"], {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.sharp
        })
    },
    shiftLeft: {
        marginLeft: -240,
        transition: theme.transitions.create(["margin"], {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.easeOut
        })
    }
});

export default styles;
