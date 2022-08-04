import React from "react";
import image from "../assets/Original.png";
import Auth from '../utils/auth';
import ReviewForm from '../components/ReviewForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SAUCE } from '../utils/queries';


const Sauce = (props) => {
  const {id: sauceID} = useParams();

  const { loading, data } = useQuery(QUERY_SAUCE, {
    variables: {id: sauceID},
  });

  const sauce = data?.sauce || {};
console.log(sauce);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
  <div>
    <section id="sauces" className="text-red bg-beige body-font">

        <div className="flex justify-evenly">
            
          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div><img alt="gallery"
                    className="object-center"
                     src= {`../.${sauce.imagePath}`}/> </div>
             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{sauce.sauceName}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{sauce.description}</p>
               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{sauce.bossSuggestion}</p>
          </div>
        </div>

<div>
{Auth.loggedIn() && <ReviewForm sauceId={sauceID} />}
</div>

</section>
</div>

  );
}

export default Sauce;