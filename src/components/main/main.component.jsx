import { useEffect } from "react";
import { useState } from "react";

import axios from 'axios'

const Main = () => {
    const [ movies, setMovies ] = useState([])

    console.log(movies)

    useEffect( () => {
        axios.get('url')
            .then( res => setMovies(res))
            .catch(err => console.log(err));
            
        
    }, []) 

    return (
        <div>
            <h1>main component</h1>
        </div>
    );
};

export default Main;