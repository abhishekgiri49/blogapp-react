import Home from '../views/Home';
import Login from '../views/Login';

import Register from '../views/Register';
import BlogDetail from '../views/BlogDetail';
import BlogByCategory from '../views/BlogByCategory';
import { Routes, Route } from 'react-router-dom';
export default () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog-detail/:blogId" element={<BlogDetail />} />
            <Route path="/blog-by-category/:categoryId" element={<BlogByCategory />} />
        </Routes>
    )
};