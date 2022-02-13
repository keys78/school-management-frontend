// import { useNavigate, Route } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const navigate = useNavigate()
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         localStorage.getItem("authToken") ? (
//           <Component {...props} />
//         ) : (

//           navigate('/login')
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;

import React from 'react'
import { Route, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const navigate = useNavigate()


    return (
        <Route
            {...rest}
            render={props => {
                localStorage.getItem("authToken") ? (
                    <Component {...props} />
                  ) : (
                  //   <Redirect to="/login" />
                    navigate('/login')
                  )
            }}
            >
        </Route>
    )
}

export default PrivateRoute
