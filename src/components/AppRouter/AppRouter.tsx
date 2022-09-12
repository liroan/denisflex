import {Navigate, Route, Routes} from "react-router-dom";
import React, {FC} from "react";
import {privateRoutes, publicRoutes, RouteNames} from "../../router";
import Dashboard from "../Dashboard/Dashboard";
import {Preloader} from "../index";

interface AppRouterProps {
    authLoading: boolean;
    isAuth: boolean;
}

const AppRouter:FC<AppRouterProps> = ({ authLoading, isAuth }) => {
    if (authLoading) return <Preloader />
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