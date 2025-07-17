import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";
import image from '../assets/images/55.png'

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-blue-500/30 text-white flex items-center justify-between px-4 sm:px-8 h-[60px] fixed top-0 left-0 right-0 z-50 select-none">
      <Link to="/" className="flex cursor-pointer">
        <div className="flex ">
          <img src={image} className="lg:w-[8vh] lg:h-[7vh] h-[3vh] w-[4vh] " />
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="font-bold lg:flex hidden text-sm uppercase">TANZANITE</h4>
            <p className="text-xs lg:flex hidden select-none">SKILLS ACADEMY</p>
          </div>
        </div>
      </Link>
      <Navigation />
    </header>
  );
}
