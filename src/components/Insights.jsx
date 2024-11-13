import React from "react";
import { motion } from "framer-motion";
import ManuelaRImage from '../assets/images/ManuelaR.jpg'
import NicolasImage from '../assets/images/nicolas.jpg';
import ManuelaFImage from '../assets/images/ManuelaF.jpg';

const Insights = () => {
    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={textVariant}
            className="w-4/5 m-auto pb-20 flex flex-col md:flex-row justify-between space-x-5 space-y-10 md:space-y-0">
            <div className="md:w-1/3 space-y-4">
                <h2 className="text-3xl font-bold"> Our Vision</h2>
                <p >Generate a significative impact to the UTP community and the people interested about the things that normally are consumign</p>
                
            </div>
            <div className="flex items-center space-x-5">
                <div>
                    <motion.img src={ManuelaRImage} alt="" className="w-16 h-16 rounded-full border-4" whileHover={{scale:1.2}}/>
                    <div>
                        <h1 className="font-bold text-lg">Manuela Restrepo</h1>
                        <p className="text-sm text-gray-600">Ilex 8, Industrial Engineering</p>
                    </div> 
                </div> 
                <div>
                    <motion.img src={NicolasImage} alt="" className="w-16 h-16 rounded-full border-4" whileHover={{scale:1.2}}/>
                    <div>
                        <h1 className="font-bold text-lg">Nicolas Moreno</h1>
                        <p className="text-sm text-gray-600">Ilex 8 , Computation Engineering</p>
                    </div> 
                </div>
                <div>
                    <motion.img src={ManuelaFImage} alt="" className="w-16 h-16 rounded-full border-4" whileHover={{scale:1.2}} />
                    <div>
                        <h1 className="font-bold text-lg">Manuela Foronda</h1>
                        <p className="text-sm text-gray-600">Ilex 8 , Computation Engineering</p>
                    </div> 
                </div>
            </div>
            
        </motion.div>
    );
};

export default Insights;