
// import React from 'react'
// import { Route, useNavigate } from 'react-router-dom'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const navigate = useNavigate()

//     // const auth = null; // determine if authorized, from context or however you're doing it

//     // // If authorized, return an outlet that will render child elements
//     // // If not, return element that will navigate to login page
//     // return auth ? <Outlet /> : <Navigate to="/login" />;


//     return (
//         <>
//          {
//                 localStorage.getItem("authToken") ? (<Component {...rest} />) : navigate('/login')
//         }  
//         </>
//     )
// }

// export default PrivateRoute


import { useNavigate, Route, Routes } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const navigate = useNavigate()

  return (
      <Routes>
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
            navigate('/login')
        )
      }>
    </Route>
    </Routes>
  );
};

export default PrivateRoute;
