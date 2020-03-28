import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'

class Header extends Component {
    render() {
        return (
            <div>
                This is component Header
            </div>
        )
    }
}

export default withStyles(styles)(Header)
