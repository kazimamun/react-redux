import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ClassForm from "./Components/Form/ClassForm/ClassForm";
import FunctionForm from "./Components/Form/FunctionForm/FunctionForm";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/cform">
            <ClassForm />
          </Route>
          <Route path='/fform'>
            <FunctionForm />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
