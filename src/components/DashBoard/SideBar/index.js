import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

class SideBar extends Component {
    render() {
        return (
            <div>
                This is component SideBar
            </div>
        )
    }
}

export default withStyles(styles)(SideBar)
