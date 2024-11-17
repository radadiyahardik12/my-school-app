import React from 'react';
import information from "./Data/infomation.json";
import { FaStar, FaRegStar } from "react-icons/fa";

const Info = () => {
  return (
    <div className="infomation flex flex-col items-center px-5 py-10 text-center">
      <div className="text_course mb-10">
        <h6 className="text-purple-800 text-sm">Testimonials</h6>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Our Popular Courses</h2>
        <p className="text-gray-600 mt-5 max-w-lg mx-auto leading-relaxed">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="mile grid gap-8 mt-16 w-full max-w-5xl grid-cols-1 md:grid-cols-2">
        {information.map((data) => (
          <div key={data.id} className="details flex flex-col items-center p-5 border border-gray-300 rounded-lg text-center">
            <div className="image mb-5">
              <img src={`/img/${data.imageSrc}`} alt="img" className="w-full max-w-xs rounded-full" />
            </div>
            <div className="info">
              <p className="mb-2">{data.detai}</p>
              <h5 className="text-purple-800 flex justify-center space-x-1 mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </h5>
              <h4 className="text-lg font-semibold">{data.miles}</h4>
              <h3 className="text-gray-600 text-sm lg:text-base">{data.department}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
