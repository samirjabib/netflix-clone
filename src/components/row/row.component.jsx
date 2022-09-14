import axios from 'axios'

import {useState, useEffect} from 'react'

import Movie from '../movie/movie.component'

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([])

   
    useEffect( () => {
        axios.get(fetchURL)
            .then(res => setMovies(res.data.results))
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center">
                <div id={'slider'}>
                    {movies.map( (item, id) =>(
                      <Movie item={ item } key={id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Row;