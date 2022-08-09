import React, {FC} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./style/App.scss"
import Home from "./views/Home/Home";



const Dashboard = () => {
    return (
        <div>
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
                    <Route
                        path="messages"
                        element={<div style={{ height: "200vh" }}>messages</div>}
                    />
                    <Route path="tasks" element={<div style={{ height: "200vh" }}>tasks</div>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;
