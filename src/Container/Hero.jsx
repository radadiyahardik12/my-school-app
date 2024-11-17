import React from "react";
import { CiSaveDown2 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="main text-center flex flex-col items-center">
      <div className="hero flex flex-col lg:flex-row items-center justify-between py-10 px-5 bg-gray-100 w-full">
        <div className="text max-w-lg">
          <div className="container-top">
            <h5 className="text-lg text-green-400 mt-2 mb-10">Online training</h5>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-10">25K+ STUDENTS TRUST US</h2>
            <h4 className="text-lg text-gray-600 mb-10">Our goal is to make online education work for everyone</h4>
          </div>
          <div className="btn grid gap-5">
            <button className="quote-btn bg-green-400 text-white py-3 px-6 rounded hover:bg-orange-600 text-lg">Get Quote Now</button>
            <button className="learn-btn bg-white text-green-400 border-2 border-green-400 py-3 px-6 rounded hover:bg-orange-500 hover:text-white text-lg">Learn More</button>
          </div>
        </div>
        <div className="hero-img mt-10 lg:mt-0">
          <img src="img/Placeholder.png" alt="img" className="w-full lg:w-96" />
        </div>
      </div>

      <div className="container-1 flex flex-wrap justify-between items-center text-center mt-12 gap-5 w-full">
        <div className="one bg-white shadow-md rounded p-6 w-full sm:w-80">
          <div className="image mb-4">
            <img src="img/004-desktop-screen.png" alt="img" className="object-cover" />
          </div>
          <h3 className="text-2xl font-bold">Certified Teacher</h3>
          <div className="mt-2 mb-4">____</div>
          <p className="text-gray-500">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
        <div className="one bg-white shadow-md rounded p-6 w-full sm:w-80">
          <div className="image mb-4">
            <img src="img/Frame.png" alt="img" className=" object-cover" />
          </div>
          <h3 className="text-2xl font-bold">2,769 online courses</h3>
          <div className="mt-2 mb-4">____</div>
          <p className="text-gray-500">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
        <div className="one bg-white shadow-md rounded p-6 w-full sm:w-80">
          <div className="image mb-4">
            <img src="img/Frame (1).png" alt="img" className=" object-cover" />
          </div>
          <h3 className="text-2xl font-bold">2,769 online courses</h3>
          <div className="mt-2 mb-4">____</div>
          <p className="text-gray-500">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
