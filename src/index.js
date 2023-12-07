import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


import './app-assets/css/bootstrap-extended.css';
import './app-assets/css/colors.css';
import './app-assets/css/components.css';
import './app-assets/css/themes/dark-layout.css';
import './app-assets/css/themes/bordered-layout.css';
import './app-assets/css/core/menu/menu-types/horizontal-menu.css';
import './app-assets/css/plugins/forms/form-quill-editor.css';
import './app-assets/css/plugins/extensions/ext-component-toastr.css';
import './app-assets/css/pages/app-email.css';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();