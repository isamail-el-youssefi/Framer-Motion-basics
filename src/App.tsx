import { motion, useScroll } from "framer-motion";
import TextCard from "./TextCard";
import TextCard2 from "./TextCard2";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden px-32">
      <motion.section
        className="grid grid-cols-4 p-10 gap-10"
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Fade Up */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 110 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
            }}
            className="w-20 h-20 bg-stone-100 rounded-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: -110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="w-20 h-20 bg-stone-100 rounded-full"
          />
        </motion.div>

        {/* Shape Shifting with keyframes */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-300"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              translateX: [0, -40, 40, 0],
              borderRadius: ["10%", "50%", "40%", "10%"],
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: 2,
              repeatDelay: 0.05,
            }}
          />
        </motion.div>

        {/* Button Hover and tap */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10"
        >
          <motion.button
            whileTap={{ scale: 1.1 }}
            whileHover={{
              scale: 0.95,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 500,
              ease: "easeInOut",
              duration: 0.3,
            }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
          >
            Subscribe
          </motion.button>
        </motion.div>

        {/* Drag */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10"
        >
          <motion.div
            drag
            dragConstraints={{ left: -90, right: 90, top: -90, bottom: 90 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 500 }}
            className="w-1/3 h-1/3 bg-orange-600 rounded-3xl cursor-grab"
          />
        </motion.div>

        {/* useScroll  */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full bg-gray-400 rounded-xl origin-bottom "
            />
          </motion.div>
        </motion.div>

        {/* useScroll  */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10"
        >
          <motion.div className="w-full h-2 bg-gray-50/20 rounded-xl">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="w-full h-full bg-gray-400 rounded-xl origin-right "
            />
          </motion.div>
        </motion.div>

        {/* svgAnimation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-600/20 stroke-[0.4]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      <TextCard2 />
      <TextCard2 />
      <TextCard />
    </div>
  );
}

export default App;
