import { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import Breadcrumb from '../../navbar/Breadcrumb';
import CategoryService from '../../repositories/CategoryService';
export default function List() {
    const [categories, setCategories] = useState('');
    const customPath = '/Category/list';

    useEffect(() => {
        fetchCategoryList();
    }, []);

    const fetchCategoryList = () => {
        CategoryService.get().then(data => {
            setCategories(data);
        });
    }
    const handleDelete = (categoryId) => {
        
        
          // Update category
          CategoryService.delete(categoryId)
            .then(() => {
                fetchCategoryList();
            })
            .catch((error) => {
              
            });
      };
    
    function renderElement() {
        if (categories) {
            return (
                categories.map((category, index) => (
                    <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>{category.title}</td>
                        <td>{category.description}</td>
                        <td><Link to={`/dashboard/category/edit/${category.id}`}> <button type="button" class="btn btn-outline-primary">Edit</button></Link>
                        <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(category.id)}>Delete</button></td>
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
                    <Link to="/dashboard/category/add"><button type="button" class="btn btn-outline-primary">ADD</button></Link>
                    {/* <!-- Bordered table start --> */}
                    <div class="row" id="table-bordered">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Category List</h4>
                                </div>

                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S.N</th>
                                                <th>Title</th>
                                                <th>description</th>
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