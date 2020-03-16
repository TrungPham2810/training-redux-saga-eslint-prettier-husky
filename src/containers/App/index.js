import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Taskboard from "./../Taskboard/index";
import theme from "./../../commons/Theme/index";
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
