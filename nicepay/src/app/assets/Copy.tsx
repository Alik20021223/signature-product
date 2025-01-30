import React from "react";

interface CopyProps {
    className?: string; // Для передачи классов
    style?: React.CSSProperties; // Для передачи inline-стилей
}

export const Copy: React.FC<CopyProps> = ({ className, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className={`icon ml-auto ${className}`} // Добавляем переданный класс
            style={style}
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"
            ></path>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM7 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};