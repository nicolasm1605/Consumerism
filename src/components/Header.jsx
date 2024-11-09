import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { div } from 'framer-motion/client';

const Header = () => {
  return (
    <div className="bg-gray-800 ">
      <div className="w-4/5 m-auto flex justify-between items-center py-5">
        <Link to="/">
          <motion.h1 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.95 }} 
            className="text-3xl bg-green-200 px-4 py-1 rounded-lg font-bold"
          >
            Conscious Consumerism
          </motion.h1>
        </Link>
      </div>
    </div>
  )
}

export default Header
