import React, {FC} from "react";
import ErrorContent from "../components/ErrorContent/ErrorContent";
import EmptyContent from "../components/EmptyContent/EmptyContent";


const withScreensaver = (Component: FC<any>) => {
    const WrappedContainer:FC<any> = (props: any) => {
        const { isLoading, error, items, preloader, ...restProps } = props;
        if (!isLoading && error) return <ErrorContent />;
        if (!isLoading && items?.length === 0) return <EmptyContent />;
        if (isLoading) return preloader;
        return (
            <Component {...restProps} items={items} />
        )
    }
    return WrappedContainer;
}

export default withScreensaver;