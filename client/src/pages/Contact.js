import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
import { validateEmail } from '../utils/helpers';
import logo from '../assets/chili-pepper.png';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log('Submit Form', formState);

    }
  };

  // const button = document.getElementById('button');

  // button.addEventListener('submit', function handleClick(event) {
  //   // if you are submitting a form
  //   event.preventDefault();

  //   const inputs = document.querySelectorAll('#contact-form');

  //   inputs.forEach(input => {
  //     input.value = '';
  //   });
  // });

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log('Handle Form', formState);
    }
  };

  return (
    <main className='h-screen bg-red'>
      <div name="contact" className="bg-beige min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-brown max-w-md w-full space-y-8 rounded-lg border border-gray-100 md:border-0 dark:border-gray-700 p-4">
          <div className="pb-6">
          <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt="Pepper"
              />
            <p className="mt-6 text-center text-3xl font-extrabold text-gray-900" data-testid="h1tag">
              Contact Us
            </p>
            <p className="mt-6 text-center text-1.5xl font-extrabold text-gray-900">Enter your information below to get in touch with us</p>
          </div>

          <div className=" flex justify-center items-center">
            <form className=" flex flex-col w-full" id="contact-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                defaultValue={name}
                onBlur={handleChange}
                className="bg-beige form-input appearance-none rounded-none relative block w-full px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none  bg-beige focus:bg-light focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                defaultValue={email}
                onBlur={handleChange}
                className="bg-beige form-input appearance-none rounded-none relative block w-full px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none  bg-beige focus:bg-light focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                defaultValue={message}
                onBlur={handleChange}
                className="bg-beige form-input appearance-none rounded-none relative block w-full px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none  bg-beige focus:bg-light focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
              </textarea>

              <div className="text-white">
                <p className="error-text text-white">{errorMessage}</p>
              </div>
              <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 m-1 border border-transparent text-sm font-medium rounded-md text-grey-700 bg-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-testid="h1tag" onClick={handleFormSubmit}
                >
                 <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* <LockClosedIcon className="h-5 w-5 text-gray-700 group-hover:text-indigo-400" aria-hidden="true" /> */}
                  </span>
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );

}

export default ContactForm;