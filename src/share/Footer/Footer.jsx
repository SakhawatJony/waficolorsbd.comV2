// import { FaFax, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/Logo/webLogo.png";
import Bglogo from "../../assets/footer/footer.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
// import { MdOutlineMail } from "react-icons/md";
// import { BiMobile } from "react-icons/bi";
// import { Link } from "react-router-dom";
const Footer = () => {
  const banner = {
    background: `url(${Bglogo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <footer style={banner} className=" text-white ">
        <div className="container mx-auto px-6 lg:flex justify-between items-center">
          {/* Logo and Social Media Section */}
          <div className="lg:border-r-2">
            <img
              src={logo}
              alt="Silkflex Bangladesh Ltd"
              className="h-72 mb-4"
            />
            <div className="flex flex-col space-x-4 items-center ">
              <h1 className="text-3xl">Follow Us</h1>
              <div className="flex  space-x-5 my-5 items-center">
                <a href="https://facebook.com" className="hover:text-gray-300">
                  <FaFacebookF style={{ fontSize: "25px" }} />
                  {/* FontAwesome icon */}
                </a>
                <a href="https://twitter.com" className="hover:text-gray-300">
                  <FaTwitter style={{ fontSize: "25px" }} />
                  {/* FontAwesome icon */}
                </a>
                <a href="https://linkedin.com" className="hover:text-gray-300">
                  <FaLinkedinIn style={{ fontSize: "25px" }} />{" "}
                  {/* FontAwesome icon */}
                </a>
              </div>
            </div>
          </div>

          {/* Office Address Section */}
          <div>
            <h2 className="font-semibold text-3xl">BANGLADESH OFFICE</h2>
            <div className="pt-5">
              <address>
                Waficolorsbd
                <br />
                House#21, Block#A, Ave#1,
                <br />
                Section#11, Mirpur,
                <br />
                Dhaka#1216. Bangladesh
              </address>
              <a
                style={{ color: "#F6911D" }}
                href="http://www.waficolorsbd.com"
                className="text-blue-400 hover:text-blue-300"
              >
                website:www.Waficolorsbd.com
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="font-semibold text-3xl">CONTACT INFO</h2>
            <div className="pt-5">
              <p>Phone1: (+880)1682-714945</p>
              <p>Phone2: (+880)1714-810148</p>

              <a
                href="mailto:waficolorsbd@gamil.com"
                className=" hover:text-blue-300"
                style={{ color: "#F6911D" }}
              >
                Email:waficolorsbd@gamil.com
              </a>
              <br />
              <button
                style={{ background: "#F6911D" }}
                className="mt-4 px-2 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
              >
                Contacts More
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 container mx-auto pt-4 text-center text-sm">
          Quick Link:{" "}
          <a
            href="#"
            style={{ color: "#F6911D" }}
            className="text-blue-400 hover:text-blue-300"
          >
            Home
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={{ color: "#F6911D" }}
            className="text-blue-400 hover:text-blue-300"
          >
            Director Message
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={{ color: "#F6911D" }}
            className="text-blue-400 hover:text-blue-300"
          >
            Latest Technological Products
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={{ color: "#F6911D" }}
            className="text-blue-400 hover:text-blue-300"
          >
            Product List
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={{ color: "#F6911D" }}
            className="text-blue-400 hover:text-blue-300"
          >
            Certification
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={{ color: "#F6911D" }}
            className="text-blue-400 hover:text-blue-300"
          >
            Contact
          </a>
        </div>
        {/* Quick Links and Copyright */}
        <div className="border-t container mx-auto border-gray-700 mt-6 pt-4 text-center text-sm">
          <p className="sm:text-xs">Copyright ©2024 Waficolorsbd. All rights reserved.</p>
          <p className="sm:text-sm py-2">Waficolorsbd.com - the largest business portal of Bangladesh</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
