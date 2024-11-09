import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Asegúrate de que esto está presente para importar Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
