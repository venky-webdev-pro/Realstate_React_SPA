import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [shoMobileMenu,setShowMobileMenu] = useState(false)

  useEffect(()=>{
    if(shoMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }

    return ()=>{
      document.body.style.overflow='auto'
    }
  },[shoMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />

        <ul className="hidden md:flex gap-7 text-white">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Projects</li>
          <li className="cursor-pointer hover:text-gray-400">Testimonials</li>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7" alt="" />
      </div>
      {/* ------------------ Mobile-menu --------------------- */}
      <div className={`md:hidden ${shoMobileMenu ? "fixed w-full":"h-0 w-0"}   right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} alt=""  className="w-6"/>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <li onClick={()=>setShowMobileMenu(false)} className="cursor-pointer hover:text-gray-400">Home</li>
          <li onClick={()=>setShowMobileMenu(false)} className="cursor-pointer hover:text-gray-400">About</li>
          <li onClick={()=>setShowMobileMenu(false)} className="cursor-pointer hover:text-gray-400">Projects</li>
          <li onClick={()=>setShowMobileMenu(false)} className="cursor-pointer hover:text-gray-400">Testimonials</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
