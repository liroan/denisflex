import {FiltersState, initialStateFilter} from "../store/filtersSlice";
import React, {FC} from "react";


export const removeNullableProperty = (object: object): object => {
    return Object.fromEntries(Object.entries(object).filter(p => p[1] !== null))
}

export const getDataWindow = (): { width: number, height: number } => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}



export const removeInitialFilter = (filtersState: FiltersState): Partial<FiltersState> => {
    return Object.fromEntries(Object.entries(filtersState).filter(([key, value]) => {
        if (key == "genres" && value === 0) return false;
        return value != initialStateFilter[key as keyof FiltersState] && initialStateFilter[key as keyof FiltersState] !== undefined;
    }))
}

export const removeUnwantedProperties = (object: FiltersState): Partial<FiltersState> => {
    const newObject: Partial<FiltersState> = { ...object };
    if (newObject["genres"] === 0) delete newObject.genres;
    if (newObject["keyword"] === "") delete newObject.keyword;
    return newObject;
}


export const getConvertedPropertyOrDash = (value: any, converter?: (value: any) => string | React.ReactNode): string | React.ReactNode => {
    if (!value || value.length === 0) return <span> &#8210;</span>;
    return converter ? converter(value) : value;
}

export const TitleWithCount:FC<{ title: string; count?: number; }> = ({title, count}) => {
    return <span>{title} <span style={{ color: "#555", fontWeight: 400 }}>({count})</span></span>;
}

export const parseToDischargeNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")
}