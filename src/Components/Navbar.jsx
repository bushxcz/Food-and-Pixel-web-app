import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {

    return (

        <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
            <div className=" container mx-auto px-6 py-4 flex items-center justify-between">

                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-20 w-20 mr-2 hover:scale-130 transition-transform duration-200" />
                    <span className="text-white font-pixel text-lg">Food & Pixel</span>
                </div>

                <div className="relative flex-grow mx-4">
                    <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 rounded-full text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
                  />

                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>

                <ul className="hidden md:flex space-x-8 text-white font-sans text-md">
                    <li> <a href="#" className="border-2 p-1 border-transparent rounded-none  hover:border-yellow-500">Home</a></li>
                    <li> <a href="#" className="border-2 p-1 border-transparent rounded-none hover:border-yellow-500">About</a></li>
                    <li> <a href="#" className="border-2 p-1 border-transparent rounded-none hover:border-yellow-500">Services</a></li>
                    <li> <a href="#" className="border-2 p-1 border-transparent rounded-none hover:border-yellow-500">Contact</a></li>

                </ul>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">☰</button>
                </div>
            </div>

        </nav>


    );

}