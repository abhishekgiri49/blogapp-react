import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import AuthUser from '../views/AuthUser';
function Auth() {
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }
    
    return (
        <>
            <nav class="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center" data-nav="brand-center">
                <div class="navbar-container d-flex content">
                    <div class="bookmark-wrapper d-flex align-items-center">
                        
                    </div>
                    <ul class="nav navbar-nav align-items-center ms-auto">
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>

                        
                    </ul>
                </div>
            </nav>
            <div className="app-content content email-application">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <Sidebar />
            </div>
        </>
    );
}

export default Auth;