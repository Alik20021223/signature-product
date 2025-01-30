// import InfoCommIcon from '@assets/InfoComm.svg'

export const ContentCancelPay = () => {
    return (
        <>
            <div className="flex flex-col items-center text-center py-8 mb-6">
                {/* <img src={InfoCommIcon} alt="" /> */}
                <div className="text-lg font-bold text-black dark:text-white w-full mt-4 mb-2">
                    Платёж отменён системой
                </div>
                <div className="text-sm font-medium text-black dark:text-white w-full opacity-60 mb-6">
                    Платёж завершён, так как Вы не подтвердили оплату.
                    <br className="hide">
                        Если у Вас есть вопросы, обратитесь в поддержку
                    </br>
                </div>
                {/* <a href="https://lzt.market/" rel="noopener noreferrer"> */}
                <button type="submit" className="flex items-center justify-center rounded-xl bg-black/10 dark:bg-white/90 text-black hover:opacity-80 py-4 px-7 text-sm font-medium disabled:opacity-70 disabled:cursor-default duration-200">
                    Вернуться на сайт
                </button>
                {/* </a> */}
            </div>
        </>
    )
}
