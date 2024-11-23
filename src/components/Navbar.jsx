import React from 'react';
import { navLists } from '../constants';
import './style/Navbar.css'; // Import the CSS file here

const Navbar = () => {
  const formatId = (name) => name.toLowerCase().replace(/\s+/g, '-'); // Converts names like "How It Works" to "how-it-works"

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <a
              key={nav}
              href={`#${formatId(nav)}`}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <button
            className="glowing-button text-sm font-semibold text-gray px-4 py-2 rounded relative"
          >
            Already a user? Login here
          </button>
          <button className="new-user-btn">New User? Register here</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
