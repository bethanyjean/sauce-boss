import React from "react";
import SauceList from '../components/SauceList'
import { useQuery } from '@apollo/client';
import { QUERY_SAUCES, QUERY_ME } from '../utils/queries';


export default function Home() {

  const { loading, data } = useQuery(QUERY_SAUCES);
  const { data: userData } = useQuery(QUERY_ME);
  const sauces = data?.sauces || [];

  return (
    <main className='bg-red'>
    
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
        <div className="h-screen col-12 mb-3 col-lg-8">
          {loading ? (
            <div>Loading...</div>
          ) : (
        <SauceList
              sauces={sauces}
            />
          )}
            </div>
      
      </div>
    </section>
    </main>
  );
}
