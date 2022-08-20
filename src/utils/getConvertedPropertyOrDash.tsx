import React from "react";

const getConvertedPropertyOrDash = (value: any, converter?: (value: any) => string | React.ReactNode): string | React.ReactNode => {
    if (!value || value.length === 0) return <span> &#8210;</span>;
    return converter ? converter(value) : value;
}


export default getConvertedPropertyOrDash;