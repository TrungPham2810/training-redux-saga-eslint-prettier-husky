const styles = (theme) => ({
    modal: {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: 400,
        // backgroundColor: theme.palette.background.paper,
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        borderRadius:10
    },
    textField: {
        width:'100%'
    },
    header: {
        // backgroundColor: theme.color.primary,
        // color: theme.color.textColor,
        // padding: theme.spacing(2),
        borderRadius:10,
        display:'flex',
        justifyContent: 'space-between'
    },
    icon:{
        cursor: 'pointer'
    },
    title: {
        fontSize: 20
    },
    content:{
        // padding: theme.spacing(2),
    },
    select: {
        width: '100%'
    }
});

export default styles;
