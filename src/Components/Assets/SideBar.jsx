import React, { useState } from 'react';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className={`p-2 text-white absolute top-4 right-4 ${
          isSidebarOpen ? 'md:hidden' : ''
        }`}
      >
        {isSidebarOpen ? 'Hide' : 'Show'}
      </button>

      {/* Sidebar content */}
      <div
        className={`bg-gray-900 text-white w-64 h-screen flex flex-col ${
          isSidebarOpen ? '' : 'hidden'
        }`}
      >
        {/* Sidebar logo */}
        <div className="text-xl font-bold mb-4">Your Logo</div>

        {/* Navigation links */}
        <ul className="list-none">
          <li className="mb-2">
            <a href="#" className="text-white no-underline">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white no-underline">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white no-underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white no-underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
