import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css'
import './assets/css/tailwind.css'
import { Provider } from 'react-redux';
import { store } from './app/store'
import App from './App';
import 'react-calendar/dist/Calendar.css';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    <Provider store={store}>
        <App />
    </Provider>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);
