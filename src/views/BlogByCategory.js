import { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import BlogService from '../repositories/BlogService';
import BlogCard from './BlogCard';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CategoryService from '../repositories/CategoryService';

export default function BlogByCategory() {
    const { categoryId } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState('');

   
    useEffect(() => {
        fetchBlogList();
        fetchCategoryList();
    }, [categoryId]);
    const fetchCategoryList = () => {
        CategoryService.getforpublic().then(data => {
            setCategories(data);
        });
    }
    const fetchBlogList = () => {
        BlogService.getBlogbyCategory(categoryId).then(data => {
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
                                        
                                        <Link to={`/blog-by-category/${category.id}`}> 
                                            <div class="blog-category-title text-body">{category.title}</div>
                                        </Link>
                                    </div>
                    
                ))
            );
        } 

    }
    return (
        <>
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