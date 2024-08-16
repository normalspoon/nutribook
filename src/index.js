import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { PlansFetchProvider } from './context/PlansContext';

import {BrowserRouter as Router} from 'react-router-dom'
import { UsersProvider } from './context/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <UsersProvider>
    <PlansFetchProvider>
    <App />
    </PlansFetchProvider>
    </UsersProvider>
    </Router>
  </React.StrictMode>
);
