import React from 'react';
import { Link } from 'react-router-dom';

const SauceList = ({sauces}) => {
  console.log(sauces);
    return(
<div className="flex flex-wrap -m-4">
          {sauces.map((sauce) => (
            <a
              key={sauce._id}
              className="sm:w-1/3 w-100 p-4">

              <div className="flex relative">
                <img alt="gallery"
                    className="absolute inset-0 object-center"
                     src= {`${sauce.imagePath}`}/>
                       
                
                <Link

                        to={`/sauce/${sauce.imageName}`}>
                  <div className="px-8 py-10 relative z-10  border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 hover:bg-brown">  
                    <h2 className="text-sm title-font font-medium text-green-400 mb-1">
                        Sauce Boss
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {sauce.sauceName}
                    </h1>
                    <p className="leading-relaxed">{sauce.description}</p>
                </div>
                </Link>{' '} 
                
              </div>
            </a>
          ))}
</div>
)};

export default SauceList;