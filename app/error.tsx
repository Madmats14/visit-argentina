'use client';

import { useEffect } from "react";
import EmptyState from "./components/EmptyStates";

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({
    error
}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <EmptyState 
            title="Oh no"
            subtitle="Something went wrong!!!"
        />
    )
};

export default ErrorState;