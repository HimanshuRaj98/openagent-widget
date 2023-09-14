import React from "react";
function NavBar() {
  return (
    <div class="bg-gray-900 text-white flex justify-between items-center p-4">
      <div class="text-lg font-bold">
        <a href="#" class="text-white no-underline">
          Your Logo
        </a>
      </div>

      <ul className="list-none flex">
        <li class="mr-4">
          <a href="/" className="text-white font-medium no-underline">
            Home
          </a>
        </li>
        <li className="mr-4">
          <a href="/about" className="text-white font-medium no-underline">
            About
          </a>
        </li>
        <li class="mr-4">
          <a href="/settings" className="text-white font-medium no-underline">
            Settings
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white font-medium no-underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
