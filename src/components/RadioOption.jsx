import React from 'react'

const RadioOption = ({ label, value, name, defaultChecked = false }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="hidden peer"
      />

      <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-[#6C25FF]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#6C25FF] hidden peer-checked:block" />
      </span>

      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );
};


export default RadioOption