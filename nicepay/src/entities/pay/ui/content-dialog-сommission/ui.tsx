import { DialogCustom } from "@feature/DialogCustom"
import { useTranslation } from "react-i18next"
import { PaymentResponseType } from "@entities/pay/types"

interface ContentDialogCommissionProps {
    data: PaymentResponseType
}

export const ContentDialogCommission: React.FC<ContentDialogCommissionProps> = ({ data }) => {

    const { t } = useTranslation()

    return (
        <>
            <DialogCustom submitText={t('titleDialogCustom', { price: '2645.10' })} defaultOpen={true} title={t('subtitleDialogCustom')}>
                <div className="bg-lime-500/20 rounded-2xl py-6 text-4xl md:text-6xl font-semibold text-center text-lime-500 mb-2 leading-none">
                    {data?.amount_local} {data?.country?.currency_code}
                </div>
                <p className="text-base font-normal text-white mb-8">
                    {t('doubleWarningDialogCustom', { price: '2645.10' })}
                </p>
            </DialogCustom>
        </>
    )
}
