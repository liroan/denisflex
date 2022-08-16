import Paginator from "../Paginator/Paginator";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {setPage} from "../../../store/filtersSlice";
interface CatalogPaginatorContainerProps {
    totalPages?: number;
}

const CatalogPaginatorContainer:FC<CatalogPaginatorContainerProps> = ({ totalPages }) => {

    let { page: activeNumber } = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch();

    const setActiveNumber = (number: number) => {
        dispatch(setPage(number))
    }

    return (
        <Paginator totalPages={totalPages} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
    )
}

export default CatalogPaginatorContainer;