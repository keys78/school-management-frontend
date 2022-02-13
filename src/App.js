import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import ConfrmRegNo from "./pages/auth/ConfrmRegNo";
import Navbar from "./components/Navbar";

// Routing
// import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
// import PrivateScreen from "./components/screens/PrivateScreen";
// import LoginScreen from "./components/screens/LoginScreen";
// import RegisterScreen from "./components/screens/RegisterScreen";
// import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
// import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/confirm-regno" element={<ConfrmRegNo />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/:resetpassword/:resetToken" element={<ResetPassword />} />
        {/* <PrivateRoute exact path="/" component={PrivateScreen} /> */}
        {/* <Route exact path="/login" component={LoginScreen} /> */}
        {/* <Route exact path="/register" component={RegisterScreen} /> */}
        {/* <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          /> */}
        {/* <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          /> */}
      </Routes>
    </Router>
  );
};

export default App;