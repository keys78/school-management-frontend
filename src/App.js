import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import ConfrmRegNo from "./pages/auth/ConfrmRegNo";
import Dashboard from "./pages/private/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/private/Profile";


const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard } />
        <PrivateRoute exact path="/profile" component={Profile } />

        <Route exact path="/" component={Home } />
        <Route exact path="/login" component={Login } />
        <Route exact path="/confirm-regno" component={ConfrmRegNo } />
        <Route exact path="/signup" component={Signup } />
        <Route exact path="/forgotpassword" component={ForgotPassword } />
        <Route exact path="/:resetpassword/:resetToken" component={ResetPassword } />
        <Redirect from="*" to="/" />

      </Switch>
    </Router>
  );
};

export default App;