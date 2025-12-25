import React from "react";

const Profile = () => {
  return (
    <div className="w-[375px] h-[812px] pb-8 bg-gray-100 border border-gray-300 justify-end px-4">
      <div className="w-[375px] h-[812px] bg-white border border-gray-200 flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-sm font-semibold text-gray-800">
            Account Settings
          </h1>
        </div>

        {/* profile */}
        <div className="px-6 py-5 flex items-center gap-4">
          {/* image */}
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* Name & email */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Marry Doe</p>
            <p className="text-xs text-gray-500">Marry@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
