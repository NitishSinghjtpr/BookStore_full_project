import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card w-80 bg-white dark:bg-gray-900 mb-5
                    text-gray-900 dark:text-white 
                    hover:scale-105 duration-300 transition-all shadow-md">

      {/* FIXED IMAGE SIZE */}
      <figure className="h-56 w-full overflow-hidden rounded-t-xl">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">

        {/* BOOK NAME */}
        <h2 className="card-title text-gray-900 dark:text-white">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700 dark:text-gray-300">
          {item.title}
        </p>

        {/* PRICE + BUY NOW */}
        <div className="card-actions justify-between mt-2">
          
          <div className="badge badge-outline 
                          text-gray-900 dark:text-gray-200">
            ${item.price}
          </div>

          <div className="badge badge-outline cursor-pointer
                          text-gray-900 dark:text-gray-200">
            Buy now
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
