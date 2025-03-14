import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// BLL

import store from './redux/redux-store';

// setInterval(() => store.dispatch({ type: "FAKE" }), 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

reportWebVitals();