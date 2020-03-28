import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class Content extends Component {
    render() {
        return (
            <div>
                This is component Content
            </div>
        )
    }
}

export default withStyles(styles)(Content)
