import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../navbar/Breadcrumb';
import CategoryService from '../../repositories/CategoryService';

const Edit = () => {
  const { categoryId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const customPath = `/blog/edit/${categoryId}`;

  useEffect(() => {
    console.log(categoryId);
    // If editing, fetch category details
      fetchCategoryDetails(categoryId);
  }, [categoryId]);

  const fetchCategoryDetails = (id) => {
    CategoryService.find(id)
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((error) => {
        console.error('Error fetching category details:', error);
        setErrorMessage('Error fetching category details. Please try again.');
      });
  };

  const handleEdit = () => {
    // Validate input (you can add more validation as needed)
    if (!title || !description) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    const categoryData = { title, description };

    
      // Update category
      CategoryService.update(categoryId, categoryData)
        .then(() => {
          setSuccessMessage('Category updated successfully');
          // Optionally, you can redirect or perform other actions after successful update
        })
        .catch((error) => {
          setErrorMessage('Error updating category. Please try again.');
          console.error('Error updating category:', error);
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
                <h4 className="card-title">Edit Category</h4>
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
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
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
                    
                  </form>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Update
                </button>
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
