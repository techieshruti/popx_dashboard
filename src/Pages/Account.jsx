import React from "react";

const Account = ({ formData }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[375px] h-[812px] bg-gray-50 border border-gray-200 px-6 pt-10">
        <h1 className="text-3xl font-bold mr-20 pb-4">
          Create your PopX account
        </h1>

        <form>
          {formData.map((data) => (
            <div className="relative mb-6" key={data.id}>
              <label
                className="block absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF] font-semibold">
                {data.label}
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                type={data.type}
                placeholder={data.placeholder}
              />
            </div>
          ))}
          
          <div className="mt-6">
  <p className="text-sm font-semibold text-gray-800 mb-3">
    Are you an Agency? <span className="text-red-500">*</span>
  </p>

  <div className="flex gap-8">
    {/* YES */}
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="agency"
        className="hidden peer"
        defaultChecked
      />
      <span className="w-5 h-5 rounded-full border-2 border-[#6C25FF] flex items-center justify-center peer-checked:border-[#6C25FF]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#6C25FF]"></span>
      </span>
      <span className="text-sm text-gray-800">Yes</span>
    </label>

    {/* NO */}
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="agency"
        className="hidden peer"
      />
      <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-[#6C25FF]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#6C25FF] hidden peer-checked:block"></span>
      </span>
      <span className="text-sm text-gray-800">No</span>
    </label>
  </div>
</div>

        </form>
        <button className="w-full bg-purple-300 text-white font-semibold py-3 rounded-md cursor-pointer mt-2">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Account;
