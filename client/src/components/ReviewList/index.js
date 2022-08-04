import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewList = ({sauce}) => {

    return(
<div className="flex flex-wrap -m-4">
          {sauce.map((reviews) => (
            <div

              className="sm:w-1/3 w-100 p-4">

              <div className="flex relative">
                
                  <div className="px-8 py-10 relative z-10  border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 hover:bg-brown">  

                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {review.reviewBody}
                    </h1>
                    <p className="leading-relaxed">{review.username}</p>
                </div>
                
              </div>
            </div>
          ))}
</div>
)};

export default ReviewList;