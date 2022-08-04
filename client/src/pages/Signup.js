import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { LockClosedIcon } from '@heroicons/react/solid';
import logo from '../assets/chili-pepper.png';
import Auth from '../utils/auth';
const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("await add user")
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log("need token")
      Auth.login(data.addUser.token);
      console.log('got token')
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="h-screen bg-red">
    <div className="bg-beige min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-brown max-w-md w-full space-y-8 rounded-lg border border-gray-100 md:border-0 dark:border-gray-700 p-4">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt="Pepper"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
            </div>
            <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
              <input type="hidden"/>
              <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">
                  Username
                </label>
                <input
                id="username"
                name="username"
                type="username"
                required
                className="bg-beige form-input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none  bg-beige focus:bg-light focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Username"
                value={formState.username}
                onChange={handleChange}
                />
              </div>
              <div>
                <label className='sr-only'>
                  Email
                </label>
                <input
                id="email"
                name="email"
                type="email"
                required
                className="bg-beige form-input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none  bg-beige focus:bg-light focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                />
              </div>
              <div>
                <label className="sr-only">
                  Password
                </label>
                <input
                id="password"
                name="password"
                type="password"
                required
                className="bg-beige form-input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none  bg-beige focus:bg-light focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
                />
              </div>
              </div>
              <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-grey-700 bg-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleFormSubmit}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-gray-700 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Sign Up
                </button>
              </div>
              </form>
              </div>
        </div>
        </main>
  );
};
export default Signup;