import React, {Component, ErrorInfo, ReactNode} from "react";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }


    render() {
        if (this.state.hasError) {
            return (
                <>
                    <ErrorScreen text="К сожалению что-то пошло не так. Обновите страницу."/>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;