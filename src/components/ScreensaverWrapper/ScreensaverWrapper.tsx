import ErrorContent from "../ErrorContent/ErrorContent";
import EmptyContent from "../EmptyContent/EmptyContent";
import React, {FC} from "react";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";


interface ScreensaverWrapperProps {
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
    itemsLength?: number;
    children: React.ReactNode;
    preloader?: React.ReactNode;
}

const ScreensaverWrapper:FC<ScreensaverWrapperProps> = ({
   isLoading,
   error,
   itemsLength,
   preloader,
   children
}) => {
    if (!isLoading && error) return <ErrorContent />;
    if (!isLoading && itemsLength === 0) return <EmptyContent />;
    if (isLoading) return <>{ preloader }</> || <div>Загрузка...</div>;
    return (
        <>
            { children }
        </>
    )
}

export default ScreensaverWrapper;