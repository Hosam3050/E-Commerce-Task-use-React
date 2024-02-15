/* eslint-disable no-unused-vars */
import './loader.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { axiosInstance } from '../axios/instance';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../Redux/slices/movieSlice';

function Movie() {
    // const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movieReducer.movies);
    const flag = useSelector(state => state.movieReducer.loading);


    useEffect(() => {
        dispatch(getMovie());
    }, [])
    return (<>
        {
            // eslint-disable-next-line react/no-unknown-property
            flag ? <div class="loader"></div>: <div className='row'>
                {
                    movies.map((item) => {
                        return <div key={item.id} className='col-3 mt-1'> <MovieCard data={item} /></div>
                    })
                }
            </div>
        }
    </>

    )
}

export default Movie