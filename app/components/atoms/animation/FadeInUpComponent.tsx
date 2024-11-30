"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./animation";
import { useInView } from "./UseInView";


export const FadeInUpWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};
