import axios from 'axios'

import {useState, useEffect} from 'react'

import Movie from '../movie/movie.component'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


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
            <div className="relative flex items-center group ">
                <MdChevronLeft size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>
                    {movies.map( (item, id) =>(
                      <Movie item={ item } key={id} />
                    ))}
                </div>
                <MdChevronRight size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '/>
            </div>
        </div>
    );
};

export default Row;