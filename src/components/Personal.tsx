import { motion, Variants } from "framer-motion";
import Carousel from "./Carousel";

// ✅ Typed Animation Variants
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 80, rotate: 3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      delay: 0.2,
    },
  },
};

const fadeZoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween" as const,
      ease: "easeOut" as const,
      duration: 0.8,
      delay: 0.4,
    },
  },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 4px 20px rgba(99, 102, 241, 0.4)",
};

const buttonTap = { scale: 0.95 };

export default function PersonalDevelopment() {
  return (
    <main className="bg-transparent mt-[6vh] lg:mt-[9vh] text-white w-[100vw] h-[80vh] flex items-center justify-center p-4 lg:overflow-hidden overflow-scroll">
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-full md:h-[90%]">
        {/* Left Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center items-start text-left p-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-500 mb-4">
            <span>Personal Development</span>
          </h1>

          <p className="text-gray-300 mb-4 hidden sm:block">
            Grow your confidence, leadership, and life skills with Tanzanite Skills Academy.
            This program helps you unlock your potential and build habits for a successful life.
          </p>

          <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1 sm:block">
            <li>Leadership and Communication</li>
            <li>Time Management</li>
            <li>Self-Awareness and Confidence</li>
            <li>Public Speaking Skills</li>
            <li>Goal Setting Techniques</li>
          </ul>

          <motion.a
            href="#"
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition text-sm sm:text-base cursor-pointer"
          >
            Enroll Now
          </motion.a>
        </motion.div>

        {/* Right Carousel */}
        <motion.div
          variants={fadeZoomIn}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center items-center p-4"
        >
          <Carousel />
        </motion.div>
      </div>
    </main>
  );
}
