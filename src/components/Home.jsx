import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <div className="w-[375px] h-[812px] flex flex-col-2 justify-end px-6 pb-12">
        <div className="mb-8">
          <h1 className=" font-bold text-xl mb-2">Welcome to PopX</h1>
          <p className="pb-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <div className="">
          <button className="bg-[#6C25FF] text-white font-bold rounded-lg px-8 py-2">
            Create Account
          </button>
          <button className="bg-[#CEBAFB] font-bold rounded-lg px-8 py-2 text-gray-800">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
