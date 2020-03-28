import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import Header from './Header';
import SideBar from './SideBar';

class DashBoard extends Component {
    render() {
        const {children, name, classes} = this.props;
        return (
            <div>
                <div className= {classes.header}>
                    <Header name = {name}/>
                </div>

                <div className= {classes.wrapper}>
                    <SideBar/>
                    <div className = {classes.content}>
                    {children}
                    </div>
                </div>


            </div>
        )
    }
}

export default withStyles(styles)(DashBoard)
