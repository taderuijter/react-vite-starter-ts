import React from "react";

function Button() {
  return (
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      role="button"
      aria-label="GitHub repository">
      Check on GitHub
    </a>
  );
}

export default Button;
