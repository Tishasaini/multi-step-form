import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot instead of render
root.render(<App />);  // Use render on the root instance