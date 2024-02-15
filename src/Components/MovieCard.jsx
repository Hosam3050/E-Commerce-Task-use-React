/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addToFav } from '../Redux/slices/movieSlice';
import { addToCart } from '../Redux/slices/movieSlice';

function MovieCard({ data }) {
    const nav = useNavigate();
    const dispatch = useDispatch();
    function go() {
        dispatch(addToFav(data));
        // nav(`/moviedet/${data.id}`, { state: data });
    }

    function goCart(){
        dispatch(addToCart(data));
    }
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} />
            <div className="card-body">
                <h5 className="card-title"> {data.title}</h5>
                <p className="card-text">
                    {data.overview}
                </p>
                <button className="btn btn-primary" onClick={goCart} >Add To Cart</button>
                <i class="fa-regular fa-heart text-danger mt-1 success p-5 " onClick={go}></i>
                {/* <Link to={`/moviedet/${data.id}`} className="btn btn-primary">
                    go to
                </Link> */}
            </div>
        </div>
    )
}

export default MovieCard