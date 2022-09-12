import {Navigate, Route, Routes} from "react-router-dom";
import React, {FC} from "react";
import {privateRoutes, publicRoutes, RouteNames} from "../../router";
import Dashboard from "../Dashboard/Dashboard";

interface AppRouterProps {
    isAuth: boolean;
}

const AppRouter:FC<AppRouterProps> = ({ isAuth }) => {
    return (
        <Routes>
            {
                isAuth ? (
                    <Route path="/" element={<Dashboard />}>
                        {
                            privateRoutes.map(({ Component, path, index }) => (
                                <Route path={path} index={index} element={<Component />} />
                            ))
                        }
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                ) : (
                    <>
                        {
                            publicRoutes.map(({Component, path, index}) => (
                                <Route path={path} index={index} element={<Component/>}/>
                            ))
                        }
                        <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
                    </>
                )
            }
        </Routes>
    )
}

export default AppRouter;