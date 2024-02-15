/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

function Fav() {

    const fav = useSelector(state => state.movieReducer.fav);
    console.log(fav);

    return (
        <div className='row'>
            {
                fav.map((item) => {
                    return <div key={item.id} className='col-3 mt-1'> <MovieCard data={item} /></div>
                })
            }
        </div>
    )
}

export default Fav