import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[300px] h-[550px] flex flex-col pb-8 bg-gray-50 border border-gray-300 justify-end px-4">

        {/* introduction */}
        <div className="mb-2">
          <h1 className=" font-bold text-xl mb-2">Welcome to PopX</h1>
          <p className="pb-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <div className="flex flex-col gap-2">
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
