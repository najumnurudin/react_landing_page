import { motion } from "framer-motion";
import { FaRobot, FaCloud, FaShieldAlt, FaMicrochip, FaBolt } from "react-icons/fa";
import image1 from "../assets/images/3.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/1.jpg";

export default function TechnologicalDevelopment() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" text-white lg:mt-[6.8vh] mt-[9vh] w-[100vw] h-fit flex items-center justify-center p-4 lg:overflow-hidden overflow-scroll bg-transparent"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-full md:h-[90%]">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center items-start text-left p-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-500 mb-4">
            Technological Development
          </h1>

          {/* Paragraph only on medium and up */}
          <p className="text-gray-300 mb-4 hidden md:block">
            Stay ahead in the fast-evolving tech world by mastering the latest tools, innovations, and best practices.
            Our Technological Development courses equip you with cutting-edge knowledge and practical skills.
          </p>

          {/* Icon list - show only icons on small screens */}
          <ul className="text-gray-300 mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="md:inline">Emerging Technologies and Trends</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="md:inline">Software and Hardware Innovations</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="md:inline">Automation and Artificial Intelligence</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="md:inline">Cybersecurity Essentials</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="md:inline">Cloud Computing and Data Management</span>
            </li>
          </ul>

          <a
            href="#"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition"
          >
            Enroll Now
          </a>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 flex flex-col items-center justify-center p-4"
        >
          {/* Top Large Image */}
          <img
            src={image1}
            alt="Technological Development Top"
            className="w-[54vh] h-[40vh] object-cover rounded-lg mb-4 shadow-lg"
          />

          {/* Bottom Two Images */}
          <div className="flex gap-4">
            <img
              src={image2}
              alt="Tech Bottom 1"
              className="w-[30vh] h-[30vh] object-cover rounded-lg shadow-md"
            />
            <img
              src={image3}
              alt="Tech Bottom 2"
              className="w-[30vh] h-[30vh] object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
