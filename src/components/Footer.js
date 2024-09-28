import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6">
      <div className="container mx-auto">
        {/* Flex container for designed by section and links */}
        <div className="text-center space-y-6">
          
          {/* Designed By Section in Center */}
          <p>
            Designed by 
            <a href="mailto:ddevansh82@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition duration-300"> ddevansh82@gmail.com</a>
          </p>

          {/* Navigation Links Below Designed By */}
          <nav>
            <ul className="flex justify-center space-x-6">
              <li>
                <Link to="/" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Contact</Link>
              </li>
              <li>
                <Link to="/services" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Services</Link>
              </li>
            </ul>
          </nav>

        </div>

        {/* Horizontal line for separation */}
        <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 0.6)', width: '60%', margin: '20px auto' }} />

      </div>

      {/* Copyright section spanning full width at the bottom */}
      <div className="bg-black text-center py-4">
        <p className="text-sm text-gray-500">&copy; 2024 The Podkart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
