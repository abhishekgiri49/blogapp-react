import Home from '../views/Home';
import Login from '../views/Login';
import { Routes, Route } from 'react-router-dom';
export default () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
};