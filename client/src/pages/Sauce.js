import React from "react";
import image from "../assets/Original.png";
import Auth from '../utils/auth';
import ReviewForm from '../components/ReviewForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SAUCES } from '../utils/queries';

export default function Sauce() {

  const { id: reviewId } = useParams();

  const { loading, data } = useQuery(QUERY_SAUCES, {
    variables: { id: reviewId },
  });

  const review = data?.review || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
  <div>
    <section id="sauces" className="text-red bg-beige body-font">

        <div class="flex justify-evenly">     
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Original Hot Sauce</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A simple blend of red peppers, vinegar, and salt. Think Tabasco</p>
               <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Perfect for anything and everything. Bosses' favorite: eggs</p>
          </div>
        </div>

<div>
{Auth.loggedIn() && <ReviewForm reviewId={review._id} />}
</div>

</section>
</div>

  );
}