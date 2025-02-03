
import { CollapseCustom } from "@feature/CollapseCustom"
import { DetailsPaymentType } from "@entities/pay/types"
import { ContentDetailsPaymentData } from "@entities/pay/mock"
import { DetailsPaymentInfo } from "@feature/DetailsPaymentInfo"
import { InfoIcon } from "@assets/InfoIcon"
import { useTranslation } from "react-i18next"

interface ContentDetails {
    data: DetailsPaymentType
}

export const ContentDetails: React.FC<ContentDetails> = ({ data }) => {

    const { t } = useTranslation()

    return (
        <>
            <div className="flex flex-col mt-3">
                <div className="text-base font-semibold text-black dark:text-white mb-4">
                    {t('sendMoneyDetailsTxt', { price: data.price })}
                </div>
                <div className="overflow-hidden rounded-2xl border border-indigo-500 dark:border-indigo-400/80 divide-y divide-black/10 dark:divide-white/10 mb-3">
                    <div className="px-4 py-4 hover:bg-white/5 cursor-pointer duration-200">
                        <div className="flex items-center">
                            <div className="flex items-center text-base font-semibold text-black dark:text-white leading-none">
                                <div className="shrink-0 flex items-center justify-center rounded-full w-9 h-9 overflow-hidden">
                                    {/* <img className="h-full" src="https://nicepayio.s3.eu-central-1.amazonaws.com/icons/payment/tajikistan.png"> */}
                                    <img src={data.imgCountry} alt="countryImg" />
                                </div>
                                <div className="ml-5 w-full">
                                    <div className="text-sm font-bold text-black dark:text-white mb-2">{t('transferToWhereTxt')}</div>
                                    <div className="text-base text-amber-600 font-extrabold dark:text-amber-400">{t('detailsPayTxt')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CollapseCustom />
                <DetailsPaymentInfo data={ContentDetailsPaymentData[0]} />
                <div className="flex items-center gap-x-1 opacity-80">
                    <InfoIcon />
                    <div className="text-xs text-amber-600 dark:text-amber-400 leading-none font-normal">
                        {t('warningTxt')}
                    </div>
                </div>
                <div className="text-base font-semibold text-black dark:text-white mt-6 mb-4">{t('exactTransferAmount')}</div>
                <DetailsPaymentInfo data={ContentDetailsPaymentData[1]} />
            </div>
        </>
    )
}
