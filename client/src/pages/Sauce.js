import React from "react";
import Auth from '../utils/auth';
import ReviewForm from '../components/ReviewForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SAUCE } from '../utils/queries';
import { useMutation} from '@apollo/client';
import { ADD_LIKE } from '../utils/mutations';


const Sauce = (props) => {
  const {id: sauceID} = useParams();
  const [addLike, {error}] = useMutation(ADD_LIKE);

  const { loading, data } = useQuery(QUERY_SAUCE, {
    variables: {id: sauceID},
  });
  const handleLike = async (event) => {
    event.preventDefault();
    try {
      await addLike({
        variables: {sauceID},
      });
    console.log("need token")
    Auth.login(data.addUser.token);
    console.log('got token')
  } catch (e) {
    console.error(e);
  }
  };
  
  const sauce = data?.sauce || {};
console.log(sauce);
const listOReviews = [];
  console.log(listOReviews);
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
               <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-grey-700 bg-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleLike}
                >
                  I like this Sauce
                </button>
          </div>
        </div>
        {/* <div className="flex flex-wrap -m-4">
          {listOReviews.map((reviews, index) => (
            <div key={index}

              className="sm:w-1/3 w-100 p-4">

              <div className="flex relative">
                
                  <div className="px-8 py-10 relative z-10  border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 hover:bg-brown">  

                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {reviews.reviewBody}
                    </h1>
                    <p className="leading-relaxed">{reviews.username}</p>
                </div>
                
              </div>
            </div>
          ))}
</div> */}

<div>
{Auth.loggedIn() && <ReviewForm sauceId={sauceID} />}
</div>

</section>
</div>

  );
}

export default Sauce;