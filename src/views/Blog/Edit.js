import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../navbar/Breadcrumb';
import BlogService from '../../repositories/BlogService';
import CategoryService from '../../repositories/CategoryService';

import CKEditorComponent from '../CKEditorComponent';
const Edit = () => {
  const { blogId } = useParams(); // Get the blog id from the URL
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const customPath = `/blog/edit/${blogId}`;

  useEffect(() => {
    // Fetch blog details and categories when the component mounts
    fetchBlogDetails();
    fetchCategoryList();
  }, [blogId]);
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  const fetchBlogDetails = () => {
    // Fetch blog details based on the id
    BlogService.find(blogId)
      .then((blog) => {
        setTitle(blog.title);
        setContent(blog.content);
        setSelectedCategory(blog.category.id);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
        setErrorMessage('Error fetching blog details. Please try again.');
      });
  };

  const fetchCategoryList = () => {
    CategoryService.get().then((data) => {
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error('Invalid data format for categories:', data);
        // Handle the error appropriately, e.g., setCategories([]) or show an error message
      }
    });
  };

  const handleEdit = () => {
    // Validate input (you can add more validation as needed)
    if (!title || !content || !selectedCategory) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    // Edit blog
    const editedBlog = { title, content };

    BlogService.update(blogId,selectedCategory, editedBlog)
      .then(() => {
        setSuccessMessage('Blog edited successfully');
        // Optionally, you can redirect or perform other actions after successful edit
      })
      .catch((error) => {
        setErrorMessage('Error editing blog. Please try again.');
      });
  };

  return (
    <div className="app-content content ">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <Breadcrumb path={customPath} />
        </div>
        <div className="content-body">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Edit Blog</h4>
                </div>
                <div className="card-body">
                <form>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="content" className="form-label">
                        content
                      </label>
                      <CKEditorComponent data={content} onChange={handleEditorChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <select
                        className="form-select"
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.title}
                          </option>
                        ))}
                      </select>
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
