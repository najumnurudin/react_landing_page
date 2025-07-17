import { FaInstagram } from "react-icons/fa";
import Gallery from "./Gallery";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";

export default function HeroSection() {
  return (
    <header className="w-[100vw] h-fit flex mt-10 p-10">
      
      <div className="flex">
        {/* <Carousel/> */}
        <Gallery/>
      </div>
      <div className=" text-white  mt-9">
        <h1 className="text-3xl text-center  font-bold mt-2">
          <span className=" text-4xl bg-gradient-to-r from-orange-600 via-orange-700 to-orange-700 text-transparent bg-clip-text">Jifunze Leo,</span>  <br />
          Badilisha maisha yako kesho
        </h1>
        <div className="flex items-center justify-center mt-10 late">
          <button className="p-2 m-2 bg-yellow-600 late cursor-pointer rounded-md hover:bg-orange-600 px-9">Jisajili</button>
        </div>
        <div className="flex items-center  justify-center gap-4 mt-9 late">
          <i><TiSocialFacebook size={28} className=" p-1 rounded-full hover:bg-yellow-700 cursor-pointer late"/></i>
          <i><FaInstagram  size={28} className=" p-1 rounded-full hover:bg-yellow-700 cursor-pointer late"/></i>
          <i><RiTwitterXFill  size={28} className=" p-1 rounded-full hover:bg-yellow-700 cursor-pointer late"/></i>
        </div>
        <div className="mx-[5vh] mt-[6vh] late flex justify-between">
          <i className="text-xs flex items-center select-none"><ImWhatsapp  size={28} className=" p-1 rounded-full hover:bg-yellow-700 cursor-pointer late"/><a className="text-white hover:text-orange-600 late" href="https://wa.me/255749722722"  target="_blank">+255 749 722 722</a> </i>
          <i className="text-xs flex items-center select-none"><IoMail size={28} className=" p-1 rounded-full hover:bg-yellow-700 cursor-pointer late"/> <a className="text-white hover:text-orange-600 late" href="mailto:info@.tanzaniteskills.ac.tz" target="blank">info@.tanzaniteskills.ac.tz</a></i>
        </div>
      </div>
    </header>
  );
}