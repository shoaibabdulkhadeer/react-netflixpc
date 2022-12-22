import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {
 
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(()=> {
     axios.get(requests.requestPopular).then((response)=> {
      setMovies(response.data.results)
     });
     console.log(movies)
 
  },[]);

 

  return (
    <div className='w-full h-[600px] text-white absolute top-0 '>
        <div className='absolute w-full h-[700px] bg-gradient-to-r from-black'></div>
      <div className='h-[700px] w-full'>
       <img 
       className='w-full h-full object-cover'
       src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
       alt={movie?.title} 
        />
      </div>
     <div className='absolute top-[30%] p-6 w-full md:p-12'>
      <h1 className='text-4xl'>{movie?.title}</h1>
     
      <div className='mt-2 text-2xl'>
        <button className='mr-2 bg-gray-200 text-black p-2'>Play</button>
        <button className='border border-gray-200 p-2 hover:bg-slate-600'>Watch later</button>
        </div>

       <p className='max-w-[600px] mt-4'>{movie?.overview}</p> 

      </div>

      
   </div>
  
  )
}

export default Main
 