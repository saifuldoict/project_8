import React, { useState } from "react";
import logo from "../assets/logo.png";
import git from "../assets/git.png";
import { ImCross } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-2xl text-gray-800">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <Link to='/'><h1 className="font-bold text-lg">HERO.IO</h1></Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
             <NavLink to="/" className='link link-hover'>Home</NavLink>
              <NavLink to="/apps" className='link link-hover'>Apps</NavLink>
              <NavLink to="/installation" className='link link-hover'>Installation</NavLink>
            </ul>
          </div>
          <button className="hidden md:flex ml-4 bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white px-4 py-2 rounded-lg">
             <img src={git} className="flex justify-center items-center gap-1.5 pr-1"/> Contribute
            </button>

         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none">
           
              {isOpen ? (
                <ImCross className="cursor-pointer"/>
                
              ) : (
                <FiMenu className="cursor-pointer"/>
              )}
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            <NavLink to="#" className='link link-hover'>Home</NavLink>
              <NavLink to="#" className='link link-hover'>Apps</NavLink>
              <NavLink to="#" className='link link-hover'>Installation</NavLink>
            
          </ul>
          <button className="flex w-full ml-4 bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white px-4 py-2 rounded-lg">
             <img src={git} className="flex justify-center items-center gap-1.5 pr-1"/> Contribute
            </button>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
