import React from "react"
import './style.css'

interface ProgressDemoProps {
    animation?: boolean,
    isTimerEnd?: boolean,
}

export const ProgressDemo: React.FC<ProgressDemoProps> = ({ animation, isTimerEnd = false }) => {
    return (
        <>
            <div className={`${isTimerEnd ? 'bg-amber-400' : 'bg-lime-300/40'  } rounded-xl h-[6px]`}>
                {animation && !isTimerEnd
                    ?
                    <div className="bg-lime-300 animation-line rounded-xl h-[6px]"></div>
                    :
                    null
                }
            </div>
        </>
    )
}
