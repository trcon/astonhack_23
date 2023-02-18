import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

const Main = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
            </Routes>
    )
}

export default Main;