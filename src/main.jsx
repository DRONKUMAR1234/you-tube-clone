import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Use 'react-dom/client'
import './index.css';
import App from './App.jsx';
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  
);
