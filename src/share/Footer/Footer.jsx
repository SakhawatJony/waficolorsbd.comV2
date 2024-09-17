
import { FaFax, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/Logo/webLogo.png"
import { FaEarthAfrica, FaFacebookF, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {


    return (
        <div>
            <footer className="footer bg-black text-white p-12 ">
                <aside className="border-r-4">
                    <img className="w-72" src={logo} alt="" />
                    <h3 className="text-3xl">FOLLOW US</h3>
                    <div className="flex gap-6 text-xl">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                    </div>
                </aside>
                <nav className="">
                    <h6 className="footer-title text-3xl">BANGLADESH OFFICE</h6>
                    <a className="link link-hover text-xl mt-12 ">Silkflex Bangladesh</a>
                    <a className="link link-hover mt-3 flex items-center gap-2"><FaLocationDot /> Address: Rupayan Taj, Flat: K-3 (3rd Floor),</a>
                    <a className="link link-hover">Plot No: 1, 1/1 NayaPalton,</a>
                    <a className="link link-hover">Dhaka-1000, Bangladesh</a>
                    <a className="link link-hover flex items-center gap-2 mt-7 text-orange-500"><FaEarthAfrica /> Website: www.silkflexbd.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-3xl text-white">CONTACT INFO</h6>
                    <a className="link link-hover text-xl mt-12">Silkflex Bangladesh</a>
                    <a className="link link-hover mt-3 flex items-center gap-2"><FaPhoneAlt /> Phone: (02)-934952</a>
                    <a className="link link-hover flex items-center gap-2"><FaFax /> Fax: (02)-8391657</a>
                    <a className="link link-hover flex items-center gap-2"><BiMobile /> Hotline: 01711665182</a>
                    <a className="link link-hover text-orange-500 flex items-center gap-2"><MdOutlineMail /> Email: mrkabir@silkflexbd.com</a>
                    <button className="bg-orange-500 p-2 text-black font-semibold rounded-md ml-5 uppercase">Cuntocts More</button>
                </nav>
            </footer>
            <div className=" bg-black text-white border-b border-gray-700">

                <ul className="flex gap-2 mx-auto items-center justify-center pb-12">

                    <h2 className="text-xl font-bold text-orange-500">Quick Link:</h2>

                    <li className='text-lg font-semibold'><Link to="/">Home</Link></li>
                    <span className="text-gray-400 font-bold text-xl">|</span>
                    <li className='text-lg font-semibold'><Link to="/"> Director Message</Link></li>
                    <span className="text-gray-400 font-bold text-xl">|</span>
                    <li className='text-lg font-semibold'><Link to="/">Latest Technological Products </Link></li>
                    <span className="text-gray-400 font-bold text-xl">|</span>
                    <li className='text-lg font-semibold'><Link to="/">Product-List</Link></li>
                    <span className="text-gray-400 font-bold text-xl">|</span>
                    <li className='text-lg font-semibold'><Link to="/">Certification</Link></li>
                    <span className="text-gray-400 font-bold text-xl">|</span>
                    <li className='text-lg font-semibold'><Link to="/">Contact</Link></li>
                </ul>
            </div>
            <footer className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p className="text-lg">Copyright © {new Date().getFullYear()} Silkflex. All rights reserved.</p>
                    <p>The site is designed & develop by: <span className="font-bold text-orange-200">@Md Rumon Sarker</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;