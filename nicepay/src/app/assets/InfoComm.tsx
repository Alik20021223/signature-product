import React from "react";

interface InfoCommProps {
    className?: string; // For passing additional classes
    style?: React.CSSProperties; // For passing inline styles
}

export const InfoComm: React.FC<InfoCommProps> = ({ className, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`text-amber-400 ${className}`} // Adding the passed class
            width="90"
            height="90"
            viewBox="0 0 16 16"
            style={style}
        >
            <path
                fill="currentColor"
                d="M2 8a6 6 0 1 1 2.996 5.195l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A6 6 0 0 1 2 8m6.75 2.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-.258-5.84A.5.5 0 0 0 7.5 5v3.5l.008.09A.5.5 0 0 0 8.5 8.5V5z"
            ></path>
        </svg>
    );
};
