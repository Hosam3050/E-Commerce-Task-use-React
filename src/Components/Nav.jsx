import { useContext } from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';
import { counterContext } from '../context/counterContext';
import { useSelector } from 'react-redux';
function Nav() {

    const count = useSelector(state => state.counterReducer.count)
    // const { count, setCount } = useContext(counterContext);
    return (
        <ul>
            <li  ><NavLink to="/home">Home</NavLink></li>
            <li ><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/movie">movie</NavLink></li>
            {/* <li><NavLink to="/mui">About</NavLink></li> */}
            
            <li><NavLink to="/fav"><i class="fa-regular fa-heart  mt-1 success "></i></NavLink></li>
            <li><NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink></li>
            {/* <li> <h4 style={{ color: "white" }}>{count}</h4></li> */}
            
        </ul>
    )

}

export default Nav;

