import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import Header from './Header';
import SideBar from './SideBar';

class DashBoard extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <Header/>
                <SideBar/>
                {children}
            </div>
        )
    }
}

export default withStyles(styles)(DashBoard)
