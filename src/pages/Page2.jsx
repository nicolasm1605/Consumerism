import React from 'react';
import { motion } from "framer-motion";

const Page2 = () => {
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
    <div className="flex flex-col items-center justify-start h-auto px-6 text-center bg-gradient-to-r from-green-200 to-blue-300 py-10">
      <h1 className="w-3/4 py-10 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
      How Synthetic Fibers Are Destroying Our Planet
      </h1>
      <div className="max-w-3xl mx-auto">
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
         className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 text-justify">
          The fashion industry’s reliance on cheap, synthetic fibers like polyester has led to significant environmental and social consequences. Polyester production has surged from 20 million tonnes in 2000 to 60 million tonnes in 2018, with projections to exceed 90 million tonnes by 2030. In 2015, polyester production alone was responsible for over 700 million tonnes of CO2 emissions, equivalent to the emissions of 180 coal-fired power plants. However, the full scale of these emissions remains unclear, as only 34% of brands disclose their carbon footprint at the raw material level.
        </motion.p>
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 text-justify">
          As polyester and other synthetic fibers have become the fabric of choice for global fashion brands, their negative effects on the environment have intensified. Synthetic fibers now account for 69% of all materials used in textiles, a number expected to rise to 75% by 2030. The shift to these cheaper, mass-produced fibers has led to the creation of more disposable clothing, which, in turn, has fueled overconsumption. Yet, despite this growing environmental impact, the Fashion Transparency Index 2022 shows that just 27% of brands disclose the breakdown of fibers used, making it difficult for consumers to identify which brands are contributing the most to synthetic material use and its associated harms.
        </motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 text-justify">
          The growing demand for fast fashion, which prioritizes profit over sustainability, is exacerbating the global textile waste crisis. The fashion industry's overproduction of cheap clothing is expected to contribute to a 63% increase in global clothing and footwear consumption by 2030. In the European Union alone, 5.8 million tonnes of textiles are discarded each year, with the vast majority of these garments ending up in landfills or being incinerated. This massive waste is further compounded by the inefficiency of textile recycling—only 0.1% of textiles are currently recycled into new fibers.

        </motion.p>
        <br />
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 text-justify">
          In addition to contributing to landfill overflow, the disposal of synthetic textiles poses a significant environmental threat in the form of microplastics. When washed, synthetic fibers shed tiny particles that flow into oceans and waterways, harming aquatic life and entering the food chain. The environmental damage caused by the fashion industry is profound, and while some solutions, like recycling programs and sustainable fabric innovations, are emerging, they remain far from widespread or efficient enough to counteract the damage already done
        </motion.p>
        <br />
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 text-justify">
          Recycling efforts in the fashion industry remain limited, and the complexity of textile waste recycling means that many materials end up being incinerated, contributing to greenhouse gas emissions. With textile waste growing at an alarming rate, it’s clear that a more sustainable model of fashion consumption must be adopted. Brands need to prioritize transparency in their supply chains, disclose the full environmental cost of their products, and invest in more sustainable production methods that reduce the use of synthetic fibers and promote circular economy models.
        </motion.p>
        <br />  
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 text-justify">
          In the face of these challenges, consumers have a crucial role to play. By supporting brands that embrace sustainable practices, purchasing second-hand clothing, and opting for higher-quality, longer-lasting garments, individuals can help shift the fashion industry toward a more sustainable future. Only through collective action can we hope to mitigate the environmental destruction caused by the fast fashion industry.
        </motion.p>
      </div>
    </div>
  );
};

export default Page2
