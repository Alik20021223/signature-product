import React from "react"

interface ContentTimerProps {
    time: string
}

export const ContentTimer: React.FC<ContentTimerProps> = ({ time }) => {
    return (
        <>
            <div className="flex items-stretch bg-lime-400/80 dark:bg-lime-400/20 rounded-xl overflow-hidden mb-6">
                <div className="flex items-center shrink-0 justify-center w-[100px] p-3">
                    <span className="text-2xl font-semibold text-black dark:text-white leading-none">{time}</span>
                </div>
                <div className="flex flex-col justify-center px-3 py-2 bg-black/10 dark:bg-black/20 w-full">
                    <div className="text-sm font-medium text-black dark:text-white leading-normal">Время на оплату платежа, иначе платёж будет отменён</div>
                </div>
            </div>
        </>
    )
}
