import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogService from '../repositories/BlogService';
import CategoryService from '../repositories/CategoryService';
import CommentService from '../repositories/CommentService';
import image from '../app-assets/images/banner/banner-12.jpg';
import avatar from '../app-assets/images/portrait/small/avatar-s-9.jpg';
import AuthUser from './AuthUser';
import CommentForm from './CommentForm';
export default function BlogDetail() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState('');
    const [categories, setCategories] = useState('');
    const [comments, setComments] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const { user } = AuthUser();
    useEffect(() => {
        fetchBlogDetails();
        fetchCategoryList();
        fetchCommentList();
    }, [blogId]);
    const fetchCategoryList = () => {

        CategoryService.getforpublic().then(data => {
            setCategories(data);
        });
    }
    const fetchCommentList = () => {

        CommentService.get(blogId).then(data => {
            setComments(data);
        });
    }
    const fetchBlogDetails = () => {
        // Fetch blog details based on the id
        BlogService.findforPublic(blogId)
            .then((blog) => {
                setBlog(blog);
            })
            .catch((error) => {

            });
    };
    const handleCommentSubmit = (commentData) => {
        // Here, you can perform any logic you need with the comment data and the blogId
        // console.log('Blog ID:', blogId);
        const newComment = { userId:user._id,blogId:blogId,comment: commentData.comment };
        CommentService.create(newComment)
      .then(() => {
        setSuccessMessage('Comment added successfully');
        fetchCommentList();
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        setErrorMessage('Error adding Comment. Please try again.');
        
      });
  
        // Perform your API call or state update here
    };
    function renderElement() {
        if (categories) {
            return (
                categories.map((category) => (
                    <div className="d-flex justify-content-start align-items-center mb-75">

                        <Link to={`/blog-by-category/${category._id}`}>
                            <div className="blog-category-title text-body">{category.title}</div>
                        </Link>
                    </div>

                ))
            );
        }

    }
    function renderComment() {
        if (comments) {
            return (
                comments.map((comment) => (
                    <div className="card-body">
                        <div className="d-flex align-items-start">
                            <div class="avatar me-75">
                                <img src={avatar} width="38" height="38" alt="Avatar" />
                            </div>
                            <div className="author-info">
                                <h6 className="fw-bolder mb-25">{comment.user.name}</h6>
                                <p className="card-text">
                                    {comment.comment}
                                </p>
                            </div>
                        </div>
                    </div>

                ))
            );
        }

    }
    return (
        <>
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row">
                </div>
                <div className="content-detached content-left">
                    <div className="content-body">
                        <div className="blog-detail-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <img src={`/uploads/${blog.image}`} className="img-fluid card-img-top" alt="Blog Detail Pic" />
                                        <div className="card-body">
                                            <h4 className="card-title">{blog.title}</h4>
                                            <div className="d-flex">

                                                <div className="author-info">
                                                    <small className="text-muted me-25">by </small>
                                                    <small><a href="#" className="text-body">{blog ? blog.user.name : ''}</a></small>

                                                </div>
                                            </div>
                                            <div className="my-1 py-25">
                                                <a href="#">
                                                    <span className="badge rounded-pill badge-light-danger me-50">{blog ? blog.category.title : ''}</span>
                                                </a>

                                            </div>
                                            <p className="card-text mb-2">
                                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                                
                                            </p>


                                            <hr className="my-2" />

                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 mt-1" id="blogComment">
                                    <h6 className="section-label mt-25">Comment</h6>
                                    <div className="card">
                                        {renderComment()}


                                    </div>
                                </div>
                                {errorMessage && (
                      <div className="alert alert-danger" role="alert">
                        {errorMessage}
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success" role="alert">
                        {successMessage}
                      </div>
                    )}
                                <CommentForm blogId={blogId} onSubmitComment={handleCommentSubmit} />

                            </div>
                        </div>


                    </div>
                </div>
                <div className="sidebar-detached sidebar-right">
                    <div className="sidebar">
                        <div className="blog-sidebar my-2 my-lg-0">



                            <div className="blog-categories mt-3">
                                <h6 className="section-label">Categories</h6>
                                <div className="mt-1">
                                    {renderElement()}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}