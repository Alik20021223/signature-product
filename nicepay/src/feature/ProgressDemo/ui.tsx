import React from "react"
import './style.css'

interface ProgressDemoProps {
    animation?: boolean
}

export const ProgressDemo: React.FC<ProgressDemoProps> = ({ animation }) => {
    return (
        <>
            <div className="bg-lime-300/40 rounded-xl h-[6px]">
                {animation
                    ?
                    <div className="bg-lime-300 animation-line rounded-xl h-[6px]"></div>
                    :
                    null
                }
            </div>
        </>
    )
}
