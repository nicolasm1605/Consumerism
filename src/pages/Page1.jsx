import React from 'react';
import { motion } from "framer-motion";

const Page1 = () => {
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
        The Hidden Cost of Consumerism and Food Waste
      </h1>
      <div className="max-w-3xl mx-auto">
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
         className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 text-justify">
          One of the most alarming signs of overconsumption is food waste. Despite the fact that 931 million tons of food are wasted globally each year, a staggering number of people remain hungry, suffering from food insecurity. This waste happens throughout the entire supply chain—from farms, where food is often lost during harvesting, to supermarkets and households where excess purchases lead to spoiled, discarded products. Tackling food waste requires not only informed policies and investments in technology and infrastructure, but also a significant cultural shift in how we view consumption and waste.
        </motion.p>
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 text-justify">
          This issue sheds light on a broader pattern of consumerism: a cycle in which goods are produced and consumed in excess, often discarded without consideration for their impact on the planet or society. Overconsumption does not only deplete resources; it also fuels an unsustainable demand that impacts everything from agricultural practices to manufacturing and distribution. This cycle leads to a vast ecological footprint, with food waste alone contributing to 8-10% of global greenhouse gas emissions. The environmental toll is immense—when food is lost or wasted, the resources invested in its production, including water, land, and energy, are squandered.
        </motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 text-justify">
          In addition, the disposal of food waste in landfills contributes to climate change through the release of methane, a potent greenhouse gas. As a consequence, food waste exacerbates climate change, worsens food insecurity by raising food prices, and undermines the sustainability of our food systems. Addressing this issue will require collective action and individual responsibility. Small lifestyle changes—such as mindful grocery shopping, proper food storage, and consuming leftovers—can help us combat this global issue. By being conscious of the resources embedded in each item we purchase, we can reshape consumer habits to create a future that values sustainability over waste.
        </motion.p>
      </div>
    </div>
  );
};

export default Page1;

