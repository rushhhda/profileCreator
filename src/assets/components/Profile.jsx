import React from "react";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("popxUser"));
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gray-50 px-4 py-6 sm:px-6 sm:py-8 lg:py-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Account Settings
      </h1>

      <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 items-center sm:items-start">
          <img
            src="https://pfpmaker.com/images/tools/ai-avatars-3.webp"
            alt="User avatar"
            className="rounded-full w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 object-cover border-2 border-gray-200"
          />
          <div className="flex flex-col justify-center text-center sm:text-left flex-grow">
            <h3 className="font-bold text-base sm:text-lg md:text-xl break-words">
              {storedUser?.username || "User"}
            </h3>
            <h4 className="text-gray-600 text-xs sm:text-sm md:text-base break-all">
              {storedUser?.email || "email@example.com"}
            </h4>
          </div>
        </div>

        <p className="text-gray-400 font-bold text-xs sm:text-sm md:text-base text-center sm:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          distinctio alias non explicabo aut provident eius, molestiae autem
          numquam laboriosam!
        </p>
      </div>
    </div>
  );
};

export default Profile;
