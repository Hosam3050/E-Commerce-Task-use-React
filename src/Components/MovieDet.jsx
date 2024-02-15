/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function MovieDet() {
    const loc = useLocation();
    console.log(loc.state);
    const prams = useParams();
    console.log(prams.id);
    return (
        <div>MovieDet</div>
    )
}

export default MovieDet