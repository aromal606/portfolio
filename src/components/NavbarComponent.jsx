
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex text-neutral-100 antialiased  items-center justify-between bg-black-300 shadow-xl shadow-gray-700/80 opacity-100">
      <div className="flex flex-shrink-0 items-center ">
        <img className="h-20 ml-5" src={logo} alt="" />
      </div>
      <div className="flex items-center gap-4 m-8 lg :text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
      </div>

    </nav>
  );
};

export default Navbar;
