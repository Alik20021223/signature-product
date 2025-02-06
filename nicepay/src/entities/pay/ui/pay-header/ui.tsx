import { PaymentResponseType } from "@entities/pay/types"


interface PayHeaderProps {
    data: PaymentResponseType | undefined
}

const PayHeader: React.FC<PayHeaderProps> = ({ data }) => {

    return (
        <>
            <div className="relative md:bg-white/60 dark:md:bg-white/10 md:rounded-2xl py-6 px-4 md:px-7 md:py-5 overflow-hidden mb-4">
                <div className="flex justify-between items-center">
                    <div className="text-center">
                        <div className="text-xl md:text-2xl leading-none font-bold text-black dark:text-white">
                            Lolzteam market
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-black dark:text-white leading-none">
                            {data?.amount_local ? data.amount_local : 0} {data?.country.currency_code}
                        </div>
                        <div className="text-lg text-black/30 dark:text-white/40 mt-2">
                            {data?.amount_usd ? data.amount_usd : 0} $
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayHeader