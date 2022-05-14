import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const route = useNavigate();
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid nav">
                <div className="navbar-brand">
                    <Link to={'/home'} className="navbar-brand">
                        <img src={"/docs/5.1/assets/brand/bootstrap-logo.svg"} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Home
                    </Link>
                    {/* <Link to={'/aboutUs'} className="navbar-brand">About us</Link> */}
                    <Link to={'/home'} className="navbar-brand">Categories</Link>
                    <Link to={'/home'} className="navbar-brand">Books</Link>
                    <Link to={'/home'} className="navbar-brand">Authors</Link>    
                </div>

                <div className="navbar-brand">
                    <button className="btn btn-outline-success" type="submit"
                        onClick={()=> route('/login')}>Login</button>
                    <button className="btn btn-outline-success" type="submit"
                        onClick={() => route('/signup')}>Register</button>
                </div>
                
                <div class="dropdown text-end">
                    <Link to="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                    </Link>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><Link class="dropdown-item" to="#">New project...</Link></li>
                        <li><Link class="dropdown-item" to="#">Settings</Link></li>
                        <li><Link class="dropdown-item" to="#">Profile</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" to="#">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}