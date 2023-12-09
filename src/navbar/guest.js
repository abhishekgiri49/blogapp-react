import { Routes, Route, Link } from 'react-router-dom';

import logo from '../app-assets/images/logo/logo.png';
import HomeRoutes from './HomeRoutes';
function Guest() {
    return (
        <>
            <>
                <nav class="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center" data-nav="brand-center">
                    <div class="navbar-container d-flex content">
                        <div class="bookmark-wrapper d-flex align-items-center">
                        <img src={logo} />
                        </div>
                        <ul class="nav navbar-nav align-items-center ms-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>


                        </ul>
                    </div>
                </nav>
                <div className="app-content content">
                    <div className="content-overlay"></div>
                    <div className="header-navbar-shadow"></div>
                    <HomeRoutes/>
                </div>
            </>
        </>
    );
}

export default Guest;