import React, { useState } from "react";

const AppNavbar = () => {
  const [threeDotsOpen, setthreeDotsOpen] = useState(false)
  return (
    <>
      <nav className="bg-white border-b-[1px] p-4 z-50 sticky top-0 ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-700">MyLogo</div>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition"
            >
              Contact
            </a>
          </div>
          {/* Button */}
          <div className=" hidden md:flex gap-x-2">
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md shadow hover:bg-purple-800 transition">
              Sign Up
            </button>
            <button className="bg-green-400 text-black border-none py-2 px-4 rounded-md cursor-pointer hover:bg-green-500">
              JOIN US
            </button>
            {/* Mobile Menu Icon */}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setthreeDotsOpen(!threeDotsOpen)}>
              {threeDotsOpen ?
                <svg className=" text-gray-600 transition rotate-45" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
             :
              
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
}
            </button>
            
          </div>
        </div>
        {threeDotsOpen && (
          <div className="flex flex-col md:hidden text-center w-full justify-center text-black font-semibold items-center ">
            <div className="flex flex-col w-full space-y-2">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-700 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-700 transition"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-700 transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-700 transition"
              >
                Contact
              </a>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-md shadow hover:bg-purple-800 transition">
                Sign Up
              </button>
              <button className="bg-green-400 text-black border-none py-2 px-4 rounded-md cursor-pointer hover:bg-green-500">
                JOIN US
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default AppNavbar;
