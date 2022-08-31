import React from "react";

export const getTitleWithCount = (title: string, count?: number) => {
    return <span>{title} <span style={{ color: "#555", fontWeight: 400 }}>({count})</span></span>;
}

export default getTitleWithCount;