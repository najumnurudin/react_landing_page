import { motion } from "framer-motion";
import { FaChartLine, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import image1 from "../assets/images/5.jpg";
import image2 from "../assets/images/1.jpg";
import image3 from "../assets/images/2.jpg";

export default function BusinessDevelopment() {
  return (
    <main className="bg-black text-white w-full pt-[60px] min-h-[calc(100vh-60px)] flex items-center justify-center p-4 lg:overflow-hidden overflow-scroll bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-6xl h-full md:h-[90%]"
      >
        {/* Left Section - Text & Icons */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 flex flex-col justify-center items-start text-left p-4 sm:p-6"
        >
          {/* Big Title */}
          <h1
            className="
              font-bold text-indigo-500 mb-4
              text-2xl sm:text-3xl md:text-5xl
            "
          >
            <span className=" sm:inline">Business Development</span>
          </h1>

          {/* Description */}
          <p
            className="
              text-gray-300 mb-4 hidden sm:block
              text-xs sm:text-sm md:text-base
            "
          >
            Develop your entrepreneurial skills and grow your business with expert strategies and
            hands-on learning. Our Business Development courses prepare you to start, manage,
            and scale your own venture.
          </p>

          {/* List */}
          <ul
            className="
              text-gray-300 list-disc list-inside mb-6 space-y-1 sm:block
              text-xs sm:text-sm md:text-base
            "
          >
            <li>Market Research and Analysis</li>
            <li>Business Planning and Strategy</li>
            <li>Sales and Marketing Techniques</li>
            <li>Financial Management</li>
            <li>Customer Relationship Management</li>
          </ul>
          {/* CTA Button */}
          <a
            href="#"
            className="
              bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full
              py-1.5 px-4 text-xs sm:py-2 sm:px-6 sm:text-sm md:text-base
              transition
            "
          >
            Enroll Now
          </a>
        </motion.div>

        {/* Right Section - Images */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4"
        >
          <img
            src={image1}
            alt="Business Development Top"
            className="
              rounded-lg mb-4 shadow-lg object-cover
              w-[54vh] h-[40vh]
            "
          />

          <div className="flex gap-3 sm:gap-4">
            <img
              src={image2}
              alt="Business Dev Bottom 1"
              className="
                rounded-lg shadow-md object-cover
                 h-[30vh] w-[30vh]
              "
            />
            <img
              src={image3}
              alt="Business Dev Bottom 2"
              className="
                rounded-lg shadow-md object-cover
                 h-[30vh] w-[30vh]
              "
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
