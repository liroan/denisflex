import React, {FC} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./style/App.scss"
import Home from "./views/Home/Home";
import Catalog from "./views/Catalog/Catalog";



const Dashboard = () => {
    return (
        <div className={'app'}>
            <Header />
            <Outlet />
        </div>
    );
}

const App:FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="" element={<Home />} />
                    <Route path="catalog" element={<Catalog />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;
