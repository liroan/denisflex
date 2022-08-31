import React, {FC, useMemo} from "react";
import ErrorContent from "../components/ErrorContent/ErrorContent";
import EmptyContent from "../components/EmptyContent/EmptyContent";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";


const useGetScreensaver = (isLoading: boolean, error?: FetchBaseQueryError | SerializedError, items?: any[]):React.ReactNode => {
    return useMemo(() => {
        let Screensaver: FC | null = null;
        if (!isLoading && error) Screensaver = ErrorContent;
        if (!isLoading && items?.length === 0) Screensaver = EmptyContent;
        return Screensaver ? <Screensaver /> : null;
    }, [isLoading, error, items])
}

export default useGetScreensaver;