import Dashboard from '../views/Dashboard';
import BlogList from '../views/Blog/List';
import BlogAdd from '../views/Blog/Add';
import BlogEdit from '../views/Blog/Edit';
import CategoryList from '../views/Category/List';
import CategoryAdd from '../views/Category/Add';
import { Routes, Route } from 'react-router-dom';
import CategoryEdit from '../views/Category/Edit';
export default () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/dashboard/blog/list" element={<BlogList />} />
            <Route path="/dashboard/blog/add" element={<BlogAdd />} />
            <Route path="/dashboard/blog/edit/:blogId" element={<BlogEdit />} />

            <Route path="/dashboard/category/list" element={<CategoryList />} />
            <Route path="/dashboard/category/add" element={<CategoryAdd />} />
            <Route path="/dashboard/category/edit/:categoryId" element={<CategoryEdit />} />
        </Routes>
    )
};