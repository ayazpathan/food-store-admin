import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import MyApp from "./app/index";
import SignIn from "./pages/sign-in/sign-in";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/app" component={MyApp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
