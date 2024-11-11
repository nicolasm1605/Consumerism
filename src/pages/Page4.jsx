import React from 'react';
import { motion } from "framer-motion";

const Page4 = () => {
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
      The Psychology of Buying: How Our Desires Are Shaped
      </h1>
      <div className="max-w-3xl mx-auto">
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
         className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 text-justify">
          Purchasing decisions are the result of a combination of internal and external factors. Internally, consumers consider their needs (what they genuinely require) versus their wants (desires shaped by outside influences). Externally, marketing plays a central role in shaping those wants by creating an image of products that promise status, happiness, or convenience. Marketing techniques such as advertising, branding, social proof, and emotional appeal encourage consumers to associate products with positive feelings and lifestyles, often leading them to purchase things they don’t necessarily need.
        </motion.p>
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
         className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 text-justify">
         For example, a person may decide to purchase a new smartphone not because their current phone is broken, but because marketing has positioned the new model as essential for staying connected, upgrading their life, or enhancing their social status. Similarly, advertising campaigns for fashion brands often make consumers feel that their identity is incomplete without the latest trendy items, fueling purchases that are driven by the desire to fit in or project an image.
        </motion.p>
        <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 text-justify">
          Marketing plays a key role in driving consumerism. It has the power to shape how we view products, needs, and even ourselves. Through advertising, product placement, and social media influencers, marketing creates a narrative around products that taps into emotions, aspirations, and fears. Companies know that appealing to consumers' emotions, rather than simply their practical needs, is far more effective in influencing purchasing decisions.
        </motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 text-justify">
          Moreover, the rise of digital marketing has introduced new methods for targeting consumers with personalized ads, exploiting their online behaviors and preferences to sell more effectively. Social media platforms amplify this influence, as influencers endorse products, encouraging followers to adopt trends that may not align with their genuine needs. This creates a cycle of constant consumption, where consumers feel pressured to stay updated and maintain their social standing, often at the expense of their financial stability or personal well being.

        </motion.p>
        <br />
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={textVariant}
        className="text-base leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-700 text-justify">
          As consumerism continues to grow, it raises important questions about the sustainability of our lifestyles. How much of our purchasing behavior is genuinely based on necessity, and how much is influenced by external pressures? The environment and society are beginning to face the consequences of overconsumption, leading to discussions on conscious consumerism and the need for a shift in values.
        </motion.p>
        <br />
        
      </div>
    </div>
  );
};
export default Page4
