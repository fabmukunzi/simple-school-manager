import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Teacher from '../components/Teacher';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1>Homepage</h1>}/>
            <Route path='/teacher/login' element={<Login />}/>
            <Route path='/teacher/subjects' element={<Teacher />}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
