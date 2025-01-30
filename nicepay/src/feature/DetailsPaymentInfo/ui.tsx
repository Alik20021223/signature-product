import { Copy } from '@assets/Copy'
import { DetailsPaymentInfoProps } from '@entities/pay/types'

interface DetailsPaymentInfoApp {
    data: DetailsPaymentInfoProps
}

export const DetailsPaymentInfo: React.FC<DetailsPaymentInfoApp> = ({ data }) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10 mb-3">
            <div className="px-5 py-5 hover:bg-white/5 cursor-pointer duration-200">
                <div className="flex items-center text-2xl font-semibold text-black dark:text-white leading-none">
                    {data.text}
                    <Copy />
                </div>
            </div>
            {data?.describe && <div className="bg-lime-600/10 py-4 px-5">
                <p className="text-sm font-normal text-black dark:text-white">
                    {data.describe}
                </p>
            </div>}
        </div>
    )
}
