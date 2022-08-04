import React from "react";
import Auth from '../utils/auth';
import ReviewForm from '../components/ReviewForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SAUCE } from '../utils/queries';
const Sauce = (props) => {
  const {id: sauceID} = useParams();
  const { data } = useQuery(QUERY_SAUCE, {
    variables: {id: sauceID},
  });
  const sauce = data?.sauce || {};
  console.log(sauce);
let listOReviews = sauce?.reviews
  console.log(listOReviews);
if (listOReviews === undefined){
  listOReviews = []
}
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
        <div className="flex flex-wrap -m-4">
          {listOReviews.map((review) => (
            <div key={review._id}
              className="sm:w-1/3 w-100 p-4">
              <div className="flex relative">
                  <div className="">
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {review.reviewBody}
                    </h1>
                    <p className="leading-relaxed">{review.username}</p>
                </div>
              </div>
            </div>
          ))}
</div>
<div>
{Auth.loggedIn() && <ReviewForm sauceId={sauceID} />}
</div>
</section>
</div>
  );
}
export default Sauce;