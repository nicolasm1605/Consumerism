import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="w-4/5 m-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024. Todos los derechos reservados.</p>
        <div>
          <Link
            to={{ pathname: "https://www.instagram.com/consumingutp/" }} // Reemplaza con tu enlace de Instagram
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
            className="flex items-center text-yellow-400 hover:underline"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            Síguenos en Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


