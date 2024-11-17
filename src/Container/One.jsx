import React from "react";

const One = () => {
  const data = [
    {
      src : "img/technology 1.png",
      title : "Affordable Packages",
      discription :'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'
    },
    {
      src : "img/media bg-cover sec-.png",
      title : "Affordable Packages second",
      discription :'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'
    }
]
  return (
    <div className="main-one flex md:flex-row gap-8 flex-col justify-center items-center p-5 bg-gray-100">
      {data.map((item) => {
        return(
          <div className="package flex md:flex-row justify-center  flex-col bg-white border border-gray-300 rounded-lg shadow-md max-w-2xl w-full">
            <div className="img flex-1 min-w-[200px]">
              <img src={item.src} alt="Package" className="w-full h-full object-contain" />
            </div>
            <div className="text flex-2 p-5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">{item.title}</h2>
              <p className="text-gray-600 mb-5">
                {item.discription}
              </p>
              <h6 className="text-orange-500 cursor-pointer hover:underline">Learn More</h6>
            </div>
          </div>
      )})}
    </div>
  );
};

export default One;
