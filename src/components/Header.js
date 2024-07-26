import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-purple-800 p-4">
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white hover:text-pink-300">Home</Link></li>
        <li><Link to="/search" className="text-white hover:text-pink-300">Search</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;