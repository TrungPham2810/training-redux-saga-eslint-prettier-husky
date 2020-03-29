const styles = theme => ({
    drawerPaper: {
        width: 240,
        height: "100vh",
        position: "relative",
        zIndex: 99
    },
    link: {
        width: "100%",
        textDecoration: "none",
        "&> div:hover": {
            background: "rgba(0, 0, 0, 0.15)"
        }
    },
    menuLinkactive: {
        "&> div": {
            background: "rgba(0, 0, 0, 0.15)"
        }
    }
});

export default styles;
