import { FaBusinessTime, FaUserTie } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { SiHtmlacademy } from "react-icons/si";
import { Link } from "react-router-dom";

export function Navigation() {
  const navItems = [
    {
      path: "/personal-development",
      label: "Personal Development",
      icon: FaUserTie,
    },
    {
      path: "/finance-management",
      label: "Personal Finance Management",
      icon: GiCash,
    },
    {
      path: "/career-development",
      label: "Career Development",
      icon: SiHtmlacademy,
    },
    {
      path: "/business-development",
      label: "Business Development",
      icon: FaBusinessTime,
    },
    {
      path: "/technology-development",
      label: "Technology Development",
      icon: GrTechnology,
    },
  ];

  return (
    <nav className="flex items-center justify-center flex-wrap gap-4 p-4">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            to={item.path}
            key={index}
            className="flex flex-col items-center border-blue-500/30 justify-center hover:border-b hover:border-b-white space-y-1 hover:text-orange-600 late transition-all duration-300"
          >
            <Icon className=" lg:mx-4 mx-[1vh] font bold lg:text-2xl" />
            <p className="text-xs lg:text-xs hidden  lg:flex  text-center">{item.label}</p>
          </Link>
        );
      })}
    </nav>
  );
}
