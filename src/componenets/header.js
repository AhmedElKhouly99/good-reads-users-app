import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid nav">
                    <Link to={'/home'} className="navbar-brand">
                        <img src={"/docs/5.1/assets/brand/bootstrap-logo.svg"} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Home
                    </Link>

                    {/* <Link to={'/aboutUs'} className="navbar-brand">About us</Link> */}
                    <Link to={'/home'} className="navbar-brand">Categories</Link>
                    <Link to={'/home'} className="navbar-brand">Books</Link>
                    <Link to={'/home'} className="navbar-brand">Authors</Link>
                
                    <button className="btn btn-outline-success" type="submit"
                        >Login</button>
                    <button className="btn btn-outline-success" type="submit">Register</button>            
                </div>
            </nav>

            
        </>

    )
}