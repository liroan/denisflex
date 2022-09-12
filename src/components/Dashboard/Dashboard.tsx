import React from "react";
import {Footer, Header, NavigatePanel} from "../index";
import {Outlet} from "react-router-dom";



const Dashboard = React.memo(() => {
    return (
        <div className='app'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <NavigatePanel />
        </div>
    );
})

export default Dashboard;