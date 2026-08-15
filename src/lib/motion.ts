import type { Variants } from "motion/react";

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, transform: "translateY(22px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};
