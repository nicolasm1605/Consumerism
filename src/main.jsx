import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> {/* Aquí está el BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

