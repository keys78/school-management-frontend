import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import ConfrmRegNo from "./pages/auth/ConfrmRegNo";
import Dashboard from "./pages/private/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/private/Profile";
import Courses from "./pages/private/Courses";
import Students from "./pages/private/Students";
import Teachers from "./pages/private/Teachers";
import Settings from "./pages/private/Settings";
import UserDetails from "./pages/private/UserDetails";



const App = () => {
  const [value, setValue] = useState(undefined)
  const [regno, setRegNo] = useState('')

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/courses" component={Courses} />
        <PrivateRoute exact path="/students" component={Students} />
        <PrivateRoute path="/students/student/:id" component={UserDetails} />
        <PrivateRoute exact path="/lecturers" component={Teachers} />
        <PrivateRoute path="/lecturers/lecturer/:id" component={UserDetails} />
        <PrivateRoute exact path="/settings" component={Settings} />

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/confirm-regno" >
          <ConfrmRegNo value={value} regno={regno} setRegNo={setRegNo} setValue={setValue} />
        </Route>
        {regno === value && <Route exact path="/signup" component={Signup} />}
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/:resetpassword/:resetToken" component={ResetPassword} />
        <Redirect from="*" to="/" />

      </Switch>
    </Router>
  );
};

export default App;