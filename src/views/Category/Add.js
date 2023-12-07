import React, { useState } from 'react';
import Breadcrumb from '../../navbar/Breadcrumb';
import CategoryService from '../../repositories/CategoryService';

const Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const customPath = '/Category/add';

  const handleAdd = () => {
    // Validate input (you can add more validation as needed)
    if (!title || !description) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    // Add category
    const newCategory = { title, description };

    CategoryService.create(newCategory)
      .then(() => {
        setSuccessMessage('Category added successfully');
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        setErrorMessage('Error adding category. Please try again.');
        
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
                  <h4 className="card-title">Add Category</h4>
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAdd}
                    >
                      Add Category
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
