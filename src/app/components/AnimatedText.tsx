import React from "react";
import { motion } from "framer-motion";

const AnimatedText: React.FC<{text:string; className:string | null; opacity: number | null; space: number | null;}> = ({ text, className = '', opacity = 0.5, space = 20 }) => {
  const words = text.split(" ");

// Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

// Variants for each word.

  const child = {
    visible: {
      opacity: opacity as number,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={className as string}
      style={{ overflow: "hidden", display: "flex", flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{marginRight: space as number}}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;