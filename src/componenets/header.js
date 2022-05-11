import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid nav">
                <a className="navbar-brand" href="#">
                    <img src={"/docs/5.1/assets/brand/bootstrap-logo.svg"} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Welcome To Good Reads
                </a>

                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Email" aria-label="email" />
                    <input className="form-control me-2" type="search" placeholder="Password" aria-label="password" />
                    <button className="btn btn-outline-success" type="submit">Login</button>
                </form>


            </div>
        </nav>
    )
}

