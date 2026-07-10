import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/variables.css";
import 'react-datepicker/dist/react-datepicker.css';
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </HelmetProvider>

)