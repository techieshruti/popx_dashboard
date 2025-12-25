import React from "react";
import RadioOption from "../components/RadioOption";

const agencyOptions = [
  { label: "Yes", value: "yes", checked: true },
  { label: "No", value: "no" },
];


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
    {agencyOptions.map((option) => (
      <RadioOption
        key={option.value}
        name="agency"
        label={option.label}
        value={option.value}
        defaultChecked={option.checked}
      />
    ))}
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
