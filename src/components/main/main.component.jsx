import { useEffect } from "react";
import { useState } from "react";

import axios from 'axios'

import requests from "../../utils/requests/request";

const Main = () => {

    const [ movies, setMovies ] = useState([])
 

    const movie = movies[Math.floor(Math.random() * movies.length)]; 



    useEffect( () => { //get movie data
        axios.get(requests.requestPopular)
            .then( res => setMovies(res.data.results))
            .catch(err => console.log(err));
            
    }, []) 

    
    
    const reducedString = (str, num) => {
        if( str?.length > num) {
           return str.slice(0,100) + '...'
        } else {
            return str
        }
    }




    return (
        <div className="w-full h-[550px] text-white bg-cyan-400">
            <div className="w-full h-[550px] bg-gradient-to-r absolute from-black"></div>
            <div className="w-full h-full">
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                    className="w-full h-full object-cover"
                    />
            </div>
            
            <div className="absolute w-full top-[20%] p-4 md:p-8">
                
                <h1 className="text-3xl md:text-5xl l font-bold'">{movie?.title}</h1>
                <div className="my-4">
                    <button className="border py-2 px-5 bg-gray-300">Play</button>
                    <button className="border border-gray-400 py-2 px-5 ml-4">Watch Later</button>
                </div>
                <p className="text-gray-400 text-sm">
                    Released: {movie?.release_date}
                </p>
                <p className="w-full md:max-w-[70%] lg:maxw-[50%] xl:max-w-[35%] text-gray-200">
                    {reducedString(movie?.overview , 150)}
                </p>
            </div>
                
        </div>
    );
};

export default Main;