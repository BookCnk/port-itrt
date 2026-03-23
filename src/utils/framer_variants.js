const ease = [0.22, 1, 0.36, 1];

export const viewport = {
  once: true,
  amount: 0.2,
};

export const variants = {
  scaleIn: {
    initial: { opacity: 0, scale: 0.9, filter: "blur(18px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  revealUp: {
    initial: { opacity: 0, y: 40, filter: "blur(14px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  revealDown: {
    initial: { opacity: 0, y: -36, filter: "blur(14px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  revealLeft: {
    initial: { opacity: 0, x: -48, filter: "blur(14px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  revealRight: {
    initial: { opacity: 0, x: 48, filter: "blur(14px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.08,
      },
    },
  },
};

export const transition = {
  smooth: { duration: 0.85, ease },
  slow: { duration: 1.2, ease },
  snappy: { duration: 0.55, ease },
  delayed: { duration: 0.85, ease, delay: 0.12 },
};
