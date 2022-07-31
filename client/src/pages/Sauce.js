import React from "react";
import { sauces } from "../data";

export default function Sauce {
   return (
    <main className='bg-beige'>
      <section id="sauces" className="text-red bg-beige body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-7xl font-extrabold title-font mb-4 text-white">
            Sauce Boss
          </h1>
          <p className="lg:w-2/3 text-3xl font-bold mx-auto leading-relaxed text-base">
            Trust the Sauce 
          </p>
          <p className="lg:w-2/3 text-3xl font-bold mx-auto leading-relaxed text-base"> 
            Our Award Winning Selection
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {sauces.map((sauce) => (
            <a
              href={sauce.link}
              key={sauce.image}
              className="sm:w-1/3 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-center"
                  src={sauce.image}
                />
                <div className="px-8 py-10 relative z-10  border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 hover:bg-brown">
                  <h2 className="text-sm title-font font-medium text-green-400 mb-1">
                    {sauce.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {sauce.title}
                  </h1>
                  <p className="leading-relaxed">{sauce.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>  
    </main>
   ) 
}