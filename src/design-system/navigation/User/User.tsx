import React from "react";

function User() {
  return (
    <button
      type="button"
      className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
      <img
        className="object-cover w-8 h-8 bg-gray-300 rounded-full"
        src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/1/avatar-male.png"
        alt=""
      />
      <span className="hidden ml-2 text-sm font-medium text-gray-900 md:block">
        {" "}
        Jacob Jones{" "}
      </span>
      <svg
        className="w-4 h-4 ml-3 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export default User;
