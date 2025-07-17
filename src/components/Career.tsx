import { motion } from "framer-motion";
import { FaBriefcase, FaSearch, FaHandshake } from "react-icons/fa";
import image1 from "../assets/career/3.jpg";
import image2 from "../assets/career/1.jpg";
import image3 from "../assets/career/2.jpg";

export default function Career() {
  return (
    <main className="bg-transparent lg:mt-[10vh] mt-[9.8vh] text-white lg:overflow-hidden overflow-scroll ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-6xl h-full md:h-[90%]"
      >
        {/* Left Section - Text / Icons */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 flex flex-col justify-center items-start text-left p-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-500 mb-4">
            <span className="">Career Development</span>
          </h1>

          <p className="text-gray-300 mb-4 hidden sm:block">
            Empower yourself with the skills and knowledge to build a successful and fulfilling career.
            Our Career Development program offers guidance, training, and resources tailored for today's job market.
          </p>

          <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1  sm:block">
            <li>Resume Writing and Interview Skills</li>
            <li>Professional Networking Strategies</li>
            <li>Job Search Techniques</li>
            <li>Career Planning and Goal Setting</li>
            <li>Workplace Communication and Ethics</li>
          </ul>
          
          <a
            href="#"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition text-sm sm:text-base"
          >
            Enroll Now
          </a>
        </motion.div>

        {/* Right Section - Images */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center p-4"
        >
          <img
            src={image1}
            alt="Career Development Top"
            className="w-[54vh] h-[40vh] object-cover rounded-lg mb-4 shadow-lg"
          />

          <div className="flex gap-4">
            <img
              src={image2}
              alt="Career Dev Bottom 1"
              className="w-[30vh] h-[30vh] object-cover rounded-lg shadow-md"
            />
            <img
              src={image3}
              alt="Career Dev Bottom 2"
              className="w-[30vh] h-[30vh] object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
