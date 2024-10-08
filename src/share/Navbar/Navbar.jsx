import { Link } from "react-router-dom";
import logo from "../../assets/Logo/webLogo.png";
// import navImg from "../../assets/Image/km_enterprise.jpg"

const Navbar = () => {

    const navItems = <>
        <li className='text-lg font-bold'><Link to="/">Home</Link></li>
        <li className='text-lg font-bold'><Link to="/director"> Director Message</Link></li>
        <li>
            <details>
                <summary className="lg:text-lg font-bold">Our Products</summary>
                <ul className="font-semibold">
                    <li className='text-sm '><Link to="/latest-products">latest-products-manual </Link></li>
                    <li className='text-sm '><Link to="/products-catalogues">ProductCatalogue</Link></li>
                    <li className='text-sm '><Link to="/product-list">Product-List</Link></li>
                </ul>
            </details>
        </li>

        <li className='text-lg font-bold'><Link to="/certification">Certification</Link></li>
        <li className='text-lg font-bold'><Link to="/contact">Contact</Link></li>

    </>

    return (
        <div className="navbar fixed z-30 mx-auto bg-white shadow-lg">
            <div className="lgl:navbar-start flex justify-between w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={"/"}>
                    <img className="lgl:w-44 lg:w-40 mdl:w-36 md:w-32 sm:w-28 lgl:h-24 lg:h-24 h-20 " src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            {/* <div className="navbar-end">
                <img className="pr-12" src={navImg} alt="nav Img" />
            </div> */}
        </div>
    );
};

export default Navbar;