/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './form.css'
function Form() {

    // eslint-disable-next-line no-unused-vars
    let age = 30;


    const [user, setUser] = useState({ email: "", pass: "" });
    const [err, setErr] = useState({ email: "", pass: "" })
    function changeUser(e) {
        // user.email = e.target.value;// 
        // console.log(user);
        if (e.target.name === "email") {
            if (e.target.value.length < 5) {
                setErr({ ...user, email: "must be more than 5 " });
            }
            else if (!e.target.value.includes("@")) {
                setErr({ ...user, email: "must be email" });
            }
            else {
                setUser({ ...user, email: e.target.value });
                setErr({ ...user, email: "" });
            }

        }
        else
            setUser({ ...user, pass: e.target.value });

    }
    // console.log(user);
    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        name='email'
                        type="email"
                        className={`form-control ${err.email && 'err'}`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={changeUser}
                    />
                    <br />
                    <br />
                    <small id="emailHelp" className="form-text text-danger">
                        {err.email}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        name='pass'
                        onChange={changeUser}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="button" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <h1>{user.email}</h1>
            <h1>{user.pass}</h1>
        </div>

    )
}

export default Form