import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
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

  // return (
  //   <section>
  //     <h1 data-testid="h1tag">Contact me</h1>
  //     <form id="contact-form" onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="name">Name:</label>
  //         <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
  //       </div>
  //       <div>
  //         <label htmlFor="email">Email address:</label>
  //         <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
  //       </div>
  //       <div>
  //         <label htmlFor="message">Message:</label>
  //         <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
  //       </div>
  //       {errorMessage && (
  //         <div>
  //           <p classNameName="error-text">{errorMessage}</p>
  //         </div>
  //       )}
  //       <button data-testid="button" type="submit">Submit</button>
  //     </form>
  //   </section>
  // );

  return (
    <main className='bg-red'>
      <div name="contact" className="bg-beige w-full h-screen bg-gradient-to-b from-black to-gray-800 p-6">
        <div className="text-center flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-6xl text-align center font-bold inline border-b-4 border-gray-500" data-testid="h1tag">
              Contact Us
            </p>
            <p className="py-6 text-2xl">Enter your information below to get in touch with us</p>
          </div>

          <div className=" flex justify-center items-center">
            <form className=" flex flex-col w-full md:w-1/2" id="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                defaultValue={name}
                onBlur={handleChange}
                className="m-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                defaultValue={email}
                onBlur={handleChange}
                className="m-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                defaultValue={message}
                onBlur={handleChange}
                className="p-2 m-4 bg-transparent border-2 rounded-md text-white focus:outline-none">
              </textarea>

              <div>
                <p className="error-text text-white">{errorMessage}</p>
              </div>

              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded" data-testid="h1tag" type="submit">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactForm;