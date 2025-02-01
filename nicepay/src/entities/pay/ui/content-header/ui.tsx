
// interface PayContentProps {

// }

import { ProgressDemo } from "@feature/ProgressDemo"
import { useTranslation } from "react-i18next"

export const ContentHeader = () => {

    const { t } = useTranslation()

    return (
        <>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold tracking-tight text-black dark:text-white !leading-none sm:text-xl">
                        {t('sendToBankTxt')}
                    </h3>
                    <div className="shrink-0 flex items-center justify-center rounded-full w-7 h-7 overflow-hidden">
                        <img src='https://nicepayio.s3.eu-central-1.amazonaws.com/icons/payment/sbp.svg' alt='TypePayment' />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                    <ProgressDemo animation={true} />
                    <ProgressDemo animation={false} />
                </div>
            </div>
        </>
    )
}
