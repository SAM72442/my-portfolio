"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const AnimatedCounterCard = ({ elementValue, textMessage }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const [isComplete, setIsComplete] = useState(false);
  const isInView = useInView(ref, { amount: 0.5 });

  const finalDisplayValue = Math.floor(elementValue / 5) * 5;
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // RESET and START
      setIsComplete(false);
      count.set(0);

      const controls = animate(count, finalDisplayValue, {
        duration: 0.5,
        ease: "easeOut",
        onComplete: () => setIsComplete(true),
      });
      return controls.stop;
    } else {
      setIsComplete(false);
    }
  }, [isInView, finalDisplayValue, count]);

  return (
    <div className="text-center">
      <div
        ref={ref}
        className="text-2xl sm:text-3xl lg:text-4xl font-bol text-orange-400"
      >
        <motion.span>{rounded}</motion.span>
        {isComplete && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            +
          </motion.span>
        )}
      </div>
      <div className="text-xs sm:text-lg lg:text-base text-gray-300">
        {textMessage}
      </div>
    </div>
  );
};

export default AnimatedCounterCard;
