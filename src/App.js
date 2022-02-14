import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import ConfrmRegNo from "./pages/auth/ConfrmRegNo";
import Dashboard from "./pages/private/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/dashboard' element={<PrivateRoute />}>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Route> */}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/confirm-regno" element={<ConfrmRegNo />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/:resetpassword/:resetToken" element={<ResetPassword />} />

      </Routes>
    </Router>
  );
};

export default App;