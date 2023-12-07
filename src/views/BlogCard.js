// BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../app-assets/images/slider/02.jpg';

import TextLimitedComponent from '../navbar/TextLimitedComponent';
const BlogCard = ({ blog }) => {
    return (
        <div className="col-md-6 col-12">
            <div className="card">
                <Link to={`/blog-detail/${blog.id}`}>
                    <img className="card-img-top img-fluid" src={image} alt="Blog Post pic" />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link to={`/blog-detail/${blog.id}`} className="blog-title-truncate text-body-heading">
                            {blog.title}
                        </Link>
                    </h4>
                    <div className="d-flex">
                        <div className="avatar me-50">
                            {/* <img src={blog.authorAvatar} alt="Avatar" width="24" height="24" /> */}
                        </div>
                        <div className="author-info">
                            <small className="text-muted me-25">by </small>
                            <small><Link to="#" className="text-body">{blog.user.name}</Link></small>
                            <span className="text-muted ms-50 me-25">|</span>
                            {/* <small className="text-muted">{blog.date}</small> */}
                        </div>
                    </div>
                    
                    <p className="card-text blog-content-truncate">
                        <TextLimitedComponent htmlContent={blog.content} maxLength={50} />
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/blog-detail/${blog.id}#blogComment`}>
                            <div className="d-flex align-items-center">
                                <i data-feather="message-square" className="font-medium-1 text-body me-50"></i>
                                {/* <span className="text-body fw-bold">{blog.comments} Comments</span> */}
                            </div>
                        </Link>
                        <Link to={`/blog-detail/${blog.id}`} className="fw-bold">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
