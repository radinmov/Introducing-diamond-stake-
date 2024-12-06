import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import "./globalStyle.css"
import Router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <Router />
    </Fragment>
);

