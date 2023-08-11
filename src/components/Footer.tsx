import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="shadow-inner ">
      <div className="w-full h-full flex md:flex-row flex-col justify-between items-center py-6 px-8">
        <p className="text-sm mb-4 md:mb-0">
          Copyright &copy; 2023 <span className="font-bold">Medsy, inc</span>{" "}
          All Rights Reserved.
        </p>
        <div className="flex text-gray-400">
          <FaFacebookF className="me-5 transition-all hover:cursor-pointer hover:text-blue-600" />
          <FaTwitter className="me-5 transition-all hover:cursor-pointer hover:text-sky-600" />
          <FaGithub className="me-5 transition-all hover:cursor-pointer hover:text-black" />
          <FaInstagram className="me-5 transition-all hover:cursor-pointer hover:text-rose-600" />
          <FaYoutube className="me-5 transition-all hover:cursor-pointer hover:text-red-500" />
          <FaLinkedinIn className="me-5 transition-all hover:cursor-pointer hover:text-sky-700" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
