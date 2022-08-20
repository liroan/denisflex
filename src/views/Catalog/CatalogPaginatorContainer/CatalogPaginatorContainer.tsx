import Paginator from "../Paginator/Paginator";
import React, {FC, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {setPage} from "../../../store/filtersSlice";
interface CatalogPaginatorContainerProps {
    totalPages?: number;
}

const CatalogPaginatorContainer:FC<CatalogPaginatorContainerProps> = React.memo(({ totalPages }) => {

    let { page: activeNumber } = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch();

    const setActiveNumber = useCallback((number: number) => {
        dispatch(setPage(number))
    }, [])

    return (
        <Paginator totalPages={totalPages} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
    )
})

export default CatalogPaginatorContainer;