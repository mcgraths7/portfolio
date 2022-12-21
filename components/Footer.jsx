import React from 'react';

const Footer = () => (
  <footer className="flex flex-col items-center justify-center p-4 relative z-1000">
    <p>Built in New Joizy</p>
    <p>Steven McGrath &copy; {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
