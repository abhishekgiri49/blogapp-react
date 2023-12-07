import { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import Breadcrumb from '../../navbar/Breadcrumb';
import BlogService from '../../repositories/BlogService';
import TextLimitedComponent from '../../navbar/TextLimitedComponent';
export default function List() {
    const [blogs, setBlogs] = useState('');
    const customPath = '/Blog/list';

    useEffect(() => {
        fetchBlogList();
    }, []);

    const fetchBlogList = () => {
        BlogService.getbyUser().then(data => {
            setBlogs(data);
        });
    }
    const handleDelete = (categoryId) => {
        
        
          // Update category
          BlogService.delete(categoryId)
            .then(() => {
                fetchBlogList();
            })
            .catch((error) => {
              
            });
      };
    
    function renderElement() {
        if (blogs) {
            return (
                blogs.map((blog, index) => (
                    <tr key={blog.id}>
                        <td>{index + 1}</td>
                        <td>{blog.title}</td>
                        <td> <TextLimitedComponent htmlContent={blog.content} maxLength={50} /></td>
                        <td>{blog.category.title}</td>
                        <td><Link to={`/dashboard/blog/edit/${blog.id}`}> <button type="button" class="btn btn-outline-primary">Edit</button></Link>
                        <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(blog.id)}>Delete</button></td>
                    </tr>
                ))
            );
        } else {
            return <p>Loading.....</p>
        }

    }

    return (
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                    <Breadcrumb path={customPath} />

                </div>
                <div class="content-body">
                    <Link to="/dashboard/blog/add"><button type="button" class="btn btn-outline-primary">ADD</button></Link>
                    {/* <!-- Bordered table start --> */}
                    <div class="row" id="table-bordered">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Blog List</h4>
                                </div>

                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S.N</th>
                                                <th>Title</th>
                                                <th>Content</th>
                                                <th>Category</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {renderElement()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Bordered table end --> */}


                </div>
            </div>
        </div>
    )
}