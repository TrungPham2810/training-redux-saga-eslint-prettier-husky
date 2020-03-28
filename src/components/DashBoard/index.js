import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'

class DashBoard extends Component {
    render() {
        return (
            <div>
                This is component dash board
            </div>
        )
    }
}

export default withStyles(styles)(DashBoard)
