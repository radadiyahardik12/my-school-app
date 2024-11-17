import React from "react";
import courses from "./Data/courses.json";
import { CiSaveDown2 } from "react-icons/ci";

const Courses = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text_course w-full max-w-3xl py-20 px-4">
        <h6 className="text-xl text-green-400">Courses</h6>
        <h2 className="text-4xl font-bold sm:text-6xl">Video in Live Action</h2>
        <p className="text-lg mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="box mt-20 flex flex-wrap justify-between items-center gap-5 px-4">
        {courses.map((data) => {
          return (
            <div key={data.id} className="info_items flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-5">
              <div className="top w-full mb-4">
                <img src={`/img/${data.imageSrc}`} alt="img" className="w-full object-cover" />
              </div>
              <div className="bottom text-start w-full px-3">
                <h5 className="title text-green-400 text-lg font-semibold flex items-center">
                  {data.title} <span className="star bg-gray-500 text-white ml-2 p-1 rounded">{data.star}</span>
                </h5>
                <h4 className="text-gray-900 font-semibold text-2xl mt-2">{data.name}</h4>
                <p className="text-gray-500 mt-2">{data.detai}</p>
                <h5 className="flex items-center text-lg mt-2">
                  <CiSaveDown2 className="icons mr-1" />
                  {data.download}
                </h5>
                <h6 className="text-orange-400 font-bold text-xl mt-2">{data.doller}</h6>
                <h5 className="info text-lg mt-2">{data.info}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
