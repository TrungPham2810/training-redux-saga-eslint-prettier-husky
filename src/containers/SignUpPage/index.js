import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link, FormControlLabel, Checkbox } from "@material-ui/core";
import styles from "./styles";

class SignUpPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.backgroundForm}>
                <div className={classes.signup}>
                    <Card className={classes.root}>
                        <CardContent>
                            <form>
                                <div className="text-xs-center">
                                    <Typography
                                        className={classes.title}
                                        variant="caption"
                                    >
                                        Login To Continue
                                    </Typography>
                                </div>

                                <TextField
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    color="secondary"
                                    fullWidth
                                    margin="none"
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    color="secondary"
                                    fullWidth
                                    type="password"
                                    margin="none"
                                />
                                <TextField
                                    id="password"
                                    label="Confirm Password"
                                    className={classes.textField}
                                    color="secondary"
                                    fullWidth
                                    type="password"
                                    margin="none"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="agree" />}
                                    label="I Agree"
                                    className={classes.fullWidth}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Sign Up
                                </Button>
                                <div className="text-md-center pt-1">
                                    <Link href="/login">I Have Account</Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

SignUpPage.propTypes = {
    classes: PropTypes.object
};
export default withStyles(styles)(SignUpPage);
