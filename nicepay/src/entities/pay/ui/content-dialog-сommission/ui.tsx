import { DialogCustom } from "@feature/DialogCustom"
import { useTranslation } from "react-i18next"

export const ContentDialogCommission = () => {

    const { t } = useTranslation()

    return (
        <>
            <DialogCustom  submitText={t('titleDialogCustom', { price: '2645.10' })} defaultOpen={true} title={t('subtitleDialogCustom')}>
                <div className="bg-lime-500/20 rounded-2xl py-6 text-4xl md:text-6xl font-semibold text-center text-lime-500 mb-2 leading-none">
                    2 625.10 ₽
                </div>
                <div className="bg-amber-400/20 text-amber-400 font-medium text-sm text-center leading-non px-4 py-4 rounded-xl mb-8">
                    {t('warningDialogCustom')}
                </div>
                <p className="text-base font-normal text-white mb-8">
                    {t('doubleWarningDialogCustom', { price: '2645.10' })}
                </p>
            </DialogCustom>
        </>
    )
}
