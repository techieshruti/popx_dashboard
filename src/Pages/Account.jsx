import { useState } from "react";
import RadioOption from "../components/RadioOption";
import { useNavigate } from "react-router-dom";

const agencyOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const Account = ({ formData }) => {
  const navigate = useNavigate();
  const [agency, setAgency] = useState("yes");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[375px] h-[812px] bg-gray-50 border flex flex-col justify-between border-gray-200 px-4 pb-8">

        <div className="">
          <h1 className="text-3xl font-bold pb-6 pt-6">
          Create your PopX account
        </h1>

        <form>
          {formData.map((data) => (
            <div className="relative mb-6" key={data.id}>
              <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs text-[#6C25FF] font-semibold">
                {data.label}
                <span className="text-red-500 pl-1">*</span>
              </label>

              <input
                type={data.type}
                placeholder={data.placeholder}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
              />
            </div>
          ))}

          {/* Agency radio */}
          <div className="mt-4">
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
                  checked={agency === option.value}
                  onChange={() => setAgency(option.value)}
                />
              ))}
            </div>
          </div>
        </form>
        </div>
        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button 
          onClick={() => navigate("/profile")}
          className="w-full bg-[#6C25FF] text-white font-semibold py-3 rounded-md mt-4 transition-colors duration-200 ease-in-out active:bg-blue-500">
            Create Account
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Account;
