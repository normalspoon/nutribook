import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { PlansFetchProvider } from './context/PlansContext';

import {BrowserRouter as Router} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <PlansFetchProvider>
    <App />
    </PlansFetchProvider>
    </Router>
  </React.StrictMode>
);
