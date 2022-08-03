import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

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
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );

  // return (
  //   <main className='bg-red'>
  //     <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
  //       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
  //         <div className="pb-8">
  //           <p className="text-4xl font-bold inline border-b-4 border-gray-500" data-testid="h1tag">
  //             Contact
  //           </p>
  //           <p className="py-6">Enter your information to get in touch with us</p>
  //         </div>

  //         <div className=" flex justify-center items-center">
  //           <form
  //             // action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
  //             // method="POST"
  //             className=" flex flex-col w-full md:w-1/2"
  //             id="contact-form" onSubmit={handleSubmit}>
  //             <input
  //               type="text"
  //               name="name"
  //               placeholder="Enter your name"
  //               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
  //             <input
  //               type="text"
  //               name="email"
  //               placeholder="Enter your email"
  //               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
  //             <textarea
  //               name="message"
  //               placeholder="Enter your message"
  //               rows="10"
  //               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
  //             </textarea>

  //             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
  //               Let's talk
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}

export default ContactForm;