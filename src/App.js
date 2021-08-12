import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
