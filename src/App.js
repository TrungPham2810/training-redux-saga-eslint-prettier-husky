import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Redux saga</h1>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary">
          Submit
        </Button>
        <Button variant="contained" disabled>
          Submit
        </Button>
      </div>
    );
  }
}

export default App;
