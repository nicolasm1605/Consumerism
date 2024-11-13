import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800">
      <div className="w-4/5 mx-auto flex justify-between items-center py-5 gap-x-4">
        {/* Título a la izquierda */}
        <Link to="/">
          <motion.h1 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.95 }} 
            className="text-3xl w-auto bg-green-200 px-2 py-1 rounded-lg font-bold"
          >
            Conscious Consumerism
          </motion.h1>
        </Link>

        {/* Botón de menú a la derecha */}
        <div className="flex items-center">
          <button 
            className="text-black font-bold px-4 py-2 rounded-md bg-green-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>

          {/* Menú desplegable */}
          {menuOpen && (
            <div className="absolute right-5 top-16 bg-gray-700 p-4 rounded-lg shadow-lg">
              <ul className="space-y-2">
                <li><Link to="/post1" className="text-white hover:text-green-300">Post 1</Link></li>
                <li><Link to="/post2" className="text-white hover:text-green-300">Post 2</Link></li>
                <li><Link to="/post3" className="text-white hover:text-green-300">Post 3</Link></li>
                <li><Link to="/post4" className="text-white hover:text-green-300">Post 4</Link></li>
                <li><Link to="/post5" className="text-white hover:text-green-300">Post 5</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
