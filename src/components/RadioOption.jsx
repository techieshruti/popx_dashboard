import React from 'react'

const RadioOption = ({ label, value, name, checked, onChange }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />

      <span
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
        ${checked ? "border-[#6C25FF]" : "border-gray-400"}`}
      >
        {/* Inner dot */}
        <span
          className={`w-2.5 h-2.5 rounded-full
          ${checked ? "bg-[#6C25FF]" : "bg-transparent"}`}
        />
      </span>

      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );
};

export default RadioOption;
