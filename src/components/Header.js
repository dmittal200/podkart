import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-extrabold text-yellow-400">
          The Podkart
        </h1>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-8 h-1 bg-yellow-400 mb-1"></div>
              <div className="w-8 h-1 bg-yellow-400 mb-1"></div>
              <div className="w-8 h-1 bg-yellow-400"></div>
            </div>
          </button>
          {isOpen && (
            <nav className="absolute right-0 w-48 bg-gray-800 text-yellow-400 shadow-lg mt-2 rounded-lg z-10">
              <ul className="flex flex-col p-2">
                <li className="py-1">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/contact"
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/services"
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
