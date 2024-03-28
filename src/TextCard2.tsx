import { motion } from "framer-motion";

const h1Animate = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export default function TextCard2() {
  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ staggerChildren: 0.5 }}
      className="flex flex-col gap-10 mb-10"
    >
      <motion.h1
        variants={h1Animate}
        className="text-5xl tracking-wide text-slate-100 text-center"
      >
        Just Keep Scrolling
      </motion.h1>
      <motion.p
        variants={textAnimate}
        className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
      >
        This is a basic tutorial on how to get up and running with Framer Motion
        with some TailwindCSS. If you enjoyed this video, please leave a like
        and also subscribe.
      </motion.p>
      <motion.p
        variants={textAnimate}
        className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
      >
        Have fun playing with Framer Motion. It is a very powerful library, when
        used properly. Add some life to your websites.
      </motion.p>
    </motion.section>
  );
}
