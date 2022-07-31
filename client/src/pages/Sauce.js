import React from "react";
import image from "../assets/Original.png";


export default function Home() {
  return (
    <main className='bg-beige h-screen'>
    
    <section id="sauces" className="text-red bg-beige body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-7xl font-extrabold title-font mb-4 text-white">
            Sauce Boss
          </h1>
          <p className="lg:w-2/3 text-2xl font-bold mx-auto leading-relaxed text-base">
            Review Page
          </p>
        </div>


        
<div class="flex justify-evenly">     
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Original Hot Sauce</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A simple blend of red peppers, vinegar, and salt. Think Tabasco</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Perfect for anything and everything. Bosses' favorite: eggs</p>
    <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Like this sauce
        </button>
</div>

<div class="flex justify-evenly">
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Your Review</h5>
    </a>
    <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Add review
        </button>
</div>
</div>


</div>         
              <div className="flex justify-center"></div>
                <img
                  alt="gallery"
                  className="object-position: center;"
                  src={image}
                />
            
      </div>
    </section>
    </main>
  );
}
