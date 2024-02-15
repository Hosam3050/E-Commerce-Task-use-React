// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { counterContext } from '../context/counterContext'
import { useDispatch } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { increaseCounter } from '../Redux/slices/counterSlice'

function Home() {
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()
    //const { count, setCount } = useContext(counterContext);
    return (
        <div>
        </div>
    )
}

export default Home