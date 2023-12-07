// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ path }) => {
  const pathnames = path.split('/').filter((x) => x);

  return (
    <div className="row breadcrumbs-top">
      <div className="col-12">
        
        <div className="breadcrumb-wrapper">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {pathnames.map((name, index) => (
              <li key={index} className="breadcrumb-item">
                <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
