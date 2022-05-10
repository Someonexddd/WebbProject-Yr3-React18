import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    audience="https://northendrecords.eu.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata read:users read:roles read:role_members"
    redirectUri={window.location.origin}>
        <App tab="home" />
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
