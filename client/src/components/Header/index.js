import React from 'react';
import Auth from '../../utils/auth';

import logo from '../../assets/chili-pepper.png';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
<nav className="bg-red border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    <nav className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-semibold md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
      block py-2 pr-4 pl-3 text-gray-700 rounded">
        <li>
          <a href="/" aria-current="page" className = "hover:bg-transparent md:hover:bg-transparent md:hover:text-beige  md:dark:hover:text-beige dark:hover:bg-gray-700 dark:hover:text-beige md:dark:hover:bg-transparent">Home</a>
        </li>

        {!Auth.loggedIn() ? (
            <>
          <li><a href="/login" className = "hover:bg-transparent md:hover:bg-transparent md:hover:text-beige  md:dark:hover:text-beige dark:hover:bg-gray-700 dark:hover:text-beige md:dark:hover:bg-transparent">Login</a></li>
          <li>
          <a href="/signup" className = "hover:bg-transparent md:hover:bg-transparent md:hover:text-beige  md:dark:hover:text-beige dark:hover:bg-gray-700 dark:hover:text-beige md:dark:hover:bg-transparent">Signup</a>
          </li>
          </>
          ) : (
            <>
                   </>
          )} 

           {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={logout} className = "hover:bg-transparent md:hover:bg-transparent md:hover:text-beige  md:dark:hover:text-beige dark:hover:bg-gray-700 dark:hover:text-beige md:dark:hover:bg-transparent">
                Logout
              </a>
            </>
          ) : (
            <>
                   </>
          )}
        <li>
          <a href="/contact" className = "hover:bg-transparent md:hover:bg-transparent md:hover:text-beige  md:dark:hover:text-beige dark:hover:bg-gray-700 dark:hover:text-beige md:dark:hover:bg-transparent">Contact Us</a>
        </li>
      </ul>
    </nav>
  </div>
</nav>




    // <header className="bg-secondary mb-4 py-2 flex-row align-center">
    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //     <Link to="/">
    //       <h1>Sauce Boss</h1>
    //     </Link>

    //     <nav className="text-center">
    //       {Auth.loggedIn() ? (
    //         <>
    //           <Link to="/profile">Me</Link>
    //           <a href="/" onClick={logout}>
    //             Logout
    //           </a>
    //         </>
    //       ) : (
    //         <>
    //           <Link to="/login">Login</Link>
    //           <Link to="/signup">Signup</Link>
    //         </>
    //       )}
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Header;
