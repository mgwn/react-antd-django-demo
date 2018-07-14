import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '@routes';


render(
    <Router key={Math.random()} history={browserHistory} routes={routes} />,
    document.getElementById('root')
);