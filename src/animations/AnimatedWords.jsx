// components/AnimatedWords.js

import { motion } from "framer-motion";

export const AnimatedWords = ({ text, el: Wrapper = "p", className }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            style={{ marginRight: "5px" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};