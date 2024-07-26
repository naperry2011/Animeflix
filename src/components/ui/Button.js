import React from 'react';

export const Button = ({ children, className = '', ...props }) => (
  <button
    className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;