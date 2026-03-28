import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(<App />);
