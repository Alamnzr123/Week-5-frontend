import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from '../views/User';
import Detail from '../views/Detail/Detail';
import Insert from '../views/Insert';
import Login from '../views/Login';
import Modal from '../Component/Modal';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<User />} />
                    <Route path="new" element={<Insert />} />
                    <Route path="modal" element={<Modal />} />
                </Route>

                <Route path="/login">
                    <Route index element={<Login />} />
                    <Route path=":id" element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;