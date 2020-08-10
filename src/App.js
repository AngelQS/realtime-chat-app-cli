import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path={"/"} exact component={Join} />
        <Route path={"/chat"} exact component={Chat} />
      </Router>
    );
  }
}

export default App;
