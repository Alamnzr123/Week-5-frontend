import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Insert from '../views/Insert';

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path=":id" element={<Detail />} />
                <Route path="new" element={<Insert />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )

}

export default Router;