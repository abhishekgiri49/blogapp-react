import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../navbar/Breadcrumb';
import BlogService from '../../repositories/BlogService';
import CKEditorComponent from '../CKEditorComponent';
import CategoryService from '../../repositories/CategoryService';
import AuthUser from '../AuthUser';
const Add = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const { user } = AuthUser();
  const customPath = '/Blog/add';
  useEffect(() => {
    fetchCategoryList();
  }, []);
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  const fetchCategoryList = () => {
    CategoryService.get().then(data => {
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error('Invalid data format for categories:', data);
        // Handle the error appropriately, e.g., setCategories([]) or show an error message
      }
    });
  }
  const handleAdd = () => {
    // Validate input (you can add more validation as needed)


    const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('userId', user._id);
  formData.append('categoryId', selectedCategory);
  formData.append('image', file);  // Assuming you have a 'file' state for the selected image

    BlogService.create(formData)
      .then(() => {
        setSuccessMessage('Blog added successfully');
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        if (error.status === 422) {
          const newErrors = {};
          error.data.data.forEach(item => {
            const fieldName = item.path;
            const errorMsg = item.msg;
            newErrors[fieldName] = errorMsg;
          });
          setErrors(newErrors);

        } else {
          setErrorMessage('Error adding blog. Please try again.');
        }


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
                  <h4 className="card-title">Add Blog</h4>
                </div>
                <div className="card-body">
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
                      {errors && errors.hasOwnProperty('title') && (
                        <span className="alert alert-danger" role="alert">
                          {errors.title}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="content" className="form-label">
                        content
                      </label>
                      <CKEditorComponent data={content} onChange={handleEditorChange} />
                      {errors && errors.hasOwnProperty('content') && (
                        <span className="alert alert-danger" role="alert">
                          {errors.content}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
    <label htmlFor="image" className="form-label">
      Image
    </label>
    <input
      type="file"
      className="form-control"
      id="image"
      onChange={(e) => setFile(e.target.files[0])}
    />
    {errors && errors.hasOwnProperty('image') && (
      <span className="alert alert-danger" role="alert">
        {errors.image}
      </span>
    )}
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
                          <option key={category._id} value={category._id}>
                            {category.title}
                          </option>
                        ))}
                      </select>
                      {errors && errors.hasOwnProperty('categoryId') && (
                        <span className="alert alert-danger" role="alert">
                          {errors.categoryId}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAdd}
                    >
                      Add
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

export default Add;
