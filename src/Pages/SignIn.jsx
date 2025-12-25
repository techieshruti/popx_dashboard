import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
const navigate = useNavigate();
  const renderInput = ({ id, label, type, placeholder }) => (
    <div className="relative mb-6">
      <label
        htmlFor={id}
        className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF]"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[375px] h-[812px] bg-gray-50 border border-gray-200 px-6 pt-10">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Signin to your PopX account
          </h1>
          <p className="text-gray-400 font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Inputs */}
        {renderInput({
          id: "email", label: "Email Address", type: "email", placeholder: "Enter email address",
        })}

        {renderInput({
          id: "password", label: "Password", type: "password", placeholder: "Password",
        })}

        {/* Button */}
        <button
          onClick={() => navigate("/profile")}
          className="w-full bg-[#6C25FF] text-white font-semibold py-3 rounded-md 
            mt-4 transition-all duration-200 ease-in-out active:bg-blue-500 active:scale-[0.98]
          "
        >Login</button>

      </div>
    </div>
  );
};

export default SignIn;
