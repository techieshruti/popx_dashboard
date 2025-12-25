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

      <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center
        border-gray-400 peer-checked:border-[#6C25FF]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#6C25FF]
          opacity-0 peer-checked:opacity-100 transition-opacity" />
      </span>

      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );
};

export default RadioOption;
