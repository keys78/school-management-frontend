import { Redirect, Route } from "react-router-dom";
import Layout from "../pages/private/Layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("authToken") ? (
                    <>
                        <Layout />
                        <Component {...props} />
                    </>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
