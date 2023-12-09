import { Link,useLocation  } from 'react-router-dom';
import Sidebar from './Sidebar';
import AuthUser from '../views/AuthUser';
import HomeRoutes from './HomeRoutes';
import logo from '../app-assets/images/logo/logo.png';
function Auth() {
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }
    const location = useLocation();

  // Check if the current URL contains the keyword "dashboard"
  const showSidebar = location.pathname.includes('dashboard');
    return (
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
                {showSidebar ? <Sidebar /> : <HomeRoutes/>}
            </div>
        </>
    );
}

export default Auth;