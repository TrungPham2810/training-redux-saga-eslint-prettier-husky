const styles = theme => ({
    modal: {
        top: `40%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(0, 1, 0),
        borderRadius: 5
    },

    header: {
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding: theme.spacing(2),
        borderRadius: 5,
        display: "flex",
        justifyContent: "space-between"
    },
    icon: {
        cursor: "pointer"
    },
    title: {
        fontSize: 20
    },
    content: {
        padding: theme.spacing(2)
    }
});

export default styles;
