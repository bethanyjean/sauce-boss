import React from 'react';

const Footer = () => {
  return (
<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" className="hover:underline">Sauce Boss™</a>. All Rights Reserved.
    </span>
</footer>
  );
}



export default Footer;
