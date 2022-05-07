import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css'
import './assets/css/tailwind.css'
import { Provider } from 'react-redux';
import { store } from './app/store'
import App from './App';
import 'react-calendar/dist/Calendar.css';
import 'react-quill/dist/quill.snow.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
