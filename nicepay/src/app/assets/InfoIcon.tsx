import React from "react";

interface InfoIconProps {
    className?: string; // For passing additional classes
    style?: React.CSSProperties; // For passing inline styles
}

export const InfoIcon: React.FC<InfoIconProps> = ({ className, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`text-amber-600 dark:text-amber-400 ${className}`} // Adding the passed class
            width="16"
            height="16"
            viewBox="0 0 12 12"
            style={style}
        >
            <path
                fill="currentColor"
                d="M5.5 6.5a.5.5 0 0 1 1 0V8a.5.5 0 0 1-1 0zM6 3.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"
            ></path>
        </svg>
    );
};
