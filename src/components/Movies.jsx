import React from 'react';
import MoviesData from "../MoviesData";

function Star({ rating }) {
    return (
      <div>
        {'★'.repeat(rating)}
      </div>
    );
  }
  

function Movies() {
  return (
    <div className='flex'>
      {MoviesData.map((movies, index) => (
        <div key={index} className="border w-72 m-5 h-[500px] rounded-lg shadow-md d-flex1">
          <img src={movies.cover} className="w-[100%] h-[350px] rounded-t-lg" alt={movies.title} />
          <div className="p-3">
            <h1 className="text-4xl font-sans">{movies.title}</h1>
            <p className="text-gray-600 my-3">


              <Star rating={parseInt(movies.rating)} />
            </p>




            <a href={movies.link} className="w-20 h-20 border p-2 bg-black text-white rounded-lg shadow-md">Watch Now</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;