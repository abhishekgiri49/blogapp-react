import { Link } from 'react-router-dom';

import DashboardRoutes from './DashboardRoutes';
function Sidebar() {
    return (
        <>

            <div className="content-area-wrapper container-xxl p-0">
                <div className="sidebar-left">
                    <div className="sidebar">
                        <div className="sidebar-content email-app-sidebar">
                            <div className="email-app-menu">
                                <div className="form-group-compose text-center compose-btn">
                                    <button type="button" className="compose-email btn btn-primary w-100">
                                        New Blog
                                    </button>
                                </div>
                                <div className="sidebar-menu-list">
                                    <div className="list-group list-group-messages">
                                    <Link to="/dashboard/blog/list" className="list-group-item list-group-item-action">
                                            <span className="align-middle">Blog List</span>
                                        </Link>
                                        <Link to="/dashboard/category/list" className="list-group-item list-group-item-action">
                                            <span className="align-middle">Category</span>
                                            </Link>
                                        {/* <a href="#" className="list-group-item list-group-item-action">
                                            <span className="align-middle">Draft</span>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <span className="align-middle">Starred</span>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <span className="align-middle">Spam</span>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <span className="align-middle">Trash</span>
                                        </a> */}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="content-right">
                    <div className="content-wrapper container-xxl p-0">
                        <div className="content-header row">
                        </div>
                        <div className="content-body">
                            <div className="body-content-overlay"></div>

                            <DashboardRoutes/>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Sidebar;