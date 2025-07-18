import { motion, Variants } from "framer-motion";

import image1 from "../assets/finance/1.jpg";
import image2 from "../assets/finance/2.jpg";
import image3 from "../assets/finance/3.jpg";

// ✅ TypeScript-Safe Animation Variants
const leftFadeIn: Variants = {
  hidden: { opacity: 0, x: -80, rotate: -5 },
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

const rightFadeUp: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
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

const buttonTap = {
  scale: 0.95,
};

export default function PersonalFinance() {
  return (
    <main className="bg-transparent py-3 lg:mt-[7vh] mt-[5vh] lg:h-[90vh] overflow-scroll lg:overflow-hidden ">
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-full md:h-[90%]">
        {/* Left Content */}
        <motion.div
          variants={leftFadeIn}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center items-start text-left p-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-500 mb-4">
            <span className="">Personal Finance Management</span>
          </h1>

          <p className="text-gray-300 mb-4 hidden sm:block">
            Learn how to take control of your money, make smarter financial decisions, and build a
            stable future. Our Personal Finance course equips you with practical tools to manage
            and grow your finances.
          </p>

          <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1  sm:block">
            <li>Budgeting and Expense Tracking</li>
            <li>Saving Techniques and Emergency Funds</li>
            <li>Debt Management Strategies</li>
            <li>Banking, Loans, and Credit Scores</li>
            <li>Investing Basics and Financial Goals</li>
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

        {/* Right Image Section */}
        <motion.div
          variants={rightFadeUp}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center justify-center p-4"
        >
          <img
            src={image1}
            alt="Finance top"
            className="w-[54vh] h-[40vh] object-cover rounded-lg mb-4 shadow-lg"
          />

          <div className="flex gap-4">
            <img
              src={image2}
              alt="Finance bottom 1"
              className="w-[30vh] h-[30vh] object-cover rounded-lg shadow-md"
            />
            <img
              src={image3}
              alt="Finance bottom 2"
              className="w-[30vh] h-[30vh] object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
