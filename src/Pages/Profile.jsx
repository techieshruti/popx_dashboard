const AccountSettings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CBCBCB]">
      <div className="w-[375px] h-[812px] bg-gray-50 border border-gray-200 flex flex-col">

        {/* Header */}
        <div className="px-6 py-4 bg-[#F7F8F9] border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        {/* Profile section */}
        <div className="px-6 py-5 flex items-center gap-4">
          {/* Avatar */}
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Name & email */}
          <div className="text-gray-900">
            <p className="text-sm font-semibold">
              Marry Doe
            </p>
            <p className="text-xs">
              Marry@gmail.com
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="px-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, 
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore 
            Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Bottom spacer */}
        <div className="flex-1 border-t border-dashed border-gray-300 mt-6" />

      </div>
    </div>
  );
};

export default AccountSettings;
