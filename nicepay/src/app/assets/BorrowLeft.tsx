import React from "react";

interface BorrowLeftProps {
    className?: string; // For passing additional classes
    style?: React.CSSProperties; // For passing inline styles
}

export const BorrowLeft: React.FC<BorrowLeftProps> = ({ className, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className={`icon shrink-0 ${className}`} // Adding the passed class
            width="22px"
            height="22px"
            viewBox="0 0 12 12"
            style={style}
        >
            <path
                fill="currentColor"
                d="M1.5 6a.75.75 0 0 1 .75-.75h5.94L6.22 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 9.78a.75.75 0 0 1-1.06-1.06l1.97-1.97H2.25A.75.75 0 0 1 1.5 6"
            ></path>
        </svg>
    );
};
