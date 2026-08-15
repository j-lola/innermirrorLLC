import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { revealItemVariants } from "../lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

/** Fades + rises an element into place the first time it enters the viewport. */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : revealItemVariants}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a group of children so they stagger in 60ms apart on scroll. */
export function RevealGroup({
  delayChildren = 0,
  as = "div",
  children,
  ...props
}: HTMLMotionProps<"div"> & { delayChildren?: number; as?: "div" | "ul" }) {
  const Component = (as === "ul" ? motion.ul : motion.div) as typeof motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ staggerChildren: 0.06, delayChildren }}
      {...props}
    >
      {children}
    </Component>
  );
}
