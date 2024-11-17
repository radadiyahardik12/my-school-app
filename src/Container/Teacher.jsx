import React from "react";
import list from "./Data/list.json";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Teacher = () => {
  return (
    <div className="p-8 text-center">
      {/* Header */}
      <div className="mb-8">
        <h6 className="text-purple-700 text-sm font-semibold">Newsletter</h6>
        <h2 className="text-3xl md:text-4xl font-bold my-4">Our Expert Teachers</h2>
        <p className="max-w-xl mx-auto text-gray-600 leading-relaxed">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Input */}
      <div className="max-w-lg mx-auto mb-10 flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Your Email"
          className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-purple-700"
        />
        <button className="p-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-800">Subscribe</button>
      </div>

      {/* Teacher List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {list.map((data) => (
          <div key={data.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-purple-700 mb-2">{data.title}</h3>
            <h5 className="text-gray-600">{data.about}</h5>
            <h5 className="text-gray-600">{data.carrier}</h5>
            <h5 className="text-gray-600">{data.hiring}</h5>
            <h5 className="text-gray-600">{data.blog}</h5>
          </div>
        ))}

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Get In Touch</h3>
          <h5 className="text-gray-600 flex items-center justify-center gap-2"><IoCall />(480) 555-0103</h5>
          <h5 className="text-gray-600 flex items-center justify-center gap-2"><FaLocationDot />4517 Washington Ave. Manchester, Kentucky 39495</h5>
          <h5 className="text-gray-600 flex items-center justify-center gap-2"><MdEmail />debra.holt@example.com</h5>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t mt-12 pt-6">
        <p className="text-xs text-gray-600">Made With Love By Figmaland All Right Reserved</p>
        <div className="flex justify-center gap-4 text-purple-700 mt-4">
          <FaFacebook size={24} />
          <FaInstagramSquare size={24} />
          <FaTwitterSquare size={24} />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
