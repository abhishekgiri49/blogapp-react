import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogService from '../repositories/BlogService';
import BlogCard from './BlogCard';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CategoryService from '../repositories/CategoryService';

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState('');

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',

        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',

        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',

        },
    ];
    useEffect(() => {
        fetchBlogList();
        fetchCategoryList();
    }, []);
    const fetchCategoryList = () => {
        CategoryService.getforpublic().then(data => {
            setCategories(data);
        });
    }
    const fetchBlogList = () => {
        BlogService.get().then(data => {
            if (Array.isArray(data)) {
                setBlogs(data);
            } else {
                console.error('Invalid data format for categories:', data);
                // Handle the error appropriately, e.g., setCategories([]) or show an error message
            }

        });
    }
    function renderElement() {
        if (categories) {
            return (
                categories.map((category) => (
                    <div class="d-flex justify-content-start align-items-center mb-75">
                                        
                                        <Link to={`/blog-by-category/${category._id}`}> 
                                            <div class="blog-category-title text-body">{category.title}</div>
                                        </Link>
                                    </div>
                    
                ))
            );
        } 

    }
    return (
        <><div className="slide-container">
        <Slide>
            {slideImages.map((slideImage, index) => (
                <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                       
                    </div>
                </div>
            ))}
        </Slide>
    </div>
    <br></br>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                    

                </div>
                <div class="content-detached content-left">
                    <div class="content-body">
                        {/* <!-- Blog List --> */}
                        <div class="blog-list-wrapper">
                            {/* <!-- Blog List Items --> */}
                            <div class="row">
                                {blogs.map(blog => (
                                    <BlogCard key={blog._id} blog={blog} />
                                ))}

                            </div>
                            {/* <!--/ Blog List Items --> */}

                            {/* <!-- Pagination -->
                        <div class="row">
                            <div class="col-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-center mt-2">
                                        <li class="page-item prev-item"><a class="page-link" href="#"></a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                                        <li class="page-item"><a class="page-link" href="#">6</a></li>
                                        <li class="page-item"><a class="page-link" href="#">7</a></li>
                                        <li class="page-item next-item"><a class="page-link" href="#"></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!--/ Pagination --> */}
                        </div>


                    </div>
                </div>
                <div class="sidebar-detached sidebar-right">
                    <div class="sidebar">
                        <div class="blog-sidebar my-2 my-lg-0">



                            <div class="blog-categories mt-3">
                                <h6 class="section-label">Categories</h6>
                                <div class="mt-1">
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