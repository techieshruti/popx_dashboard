import { Camera } from "lucide-react";

const AccountSettings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CBCBCB]">
      <div className="w-[375px] h-[812px] bg-gray-50 border border-gray-200 flex flex-col">

        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        {/* Profile section */}
        <div className="px-6 py-5 flex items-center gap-4">

          <div className="relative">
            <img
              src="https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Camera */}
            <div className="absolute bottom-2 -right-2 w-4 h-4 bg-[#6C25FF] rounded-full flex items-center justify-center ">
              <Camera size={12} className="text-white" />
            </div>
          </div>

          {/* Intro */}
          <div className="text-gray-900">
            <p className="text-sm font-semibold">
              Marry Doe
            </p>
            <p className="text-xs text-gray-500">
              Marry@gmail.com
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="px-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Bottom */}
        <div className="flex-1 border-t border-dashed border-gray-300 mt-6" />

      </div>
    </div>
  );
};

export default AccountSettings;
