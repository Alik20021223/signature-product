import { DialogCustom } from "@feature/DialogCustom"

export const ContentDialogCommission = () => {
    return (
        <>
            <DialogCustom submitText="Хорошо, отправлю 2 625.10 ₽" defaultOpen={true} title="Сумма платежа изменена">
                <div className="bg-lime-500/20 rounded-2xl py-6 text-4xl md:text-6xl font-semibold text-center text-lime-500 mb-2 leading-none">
                    2 625.10 ₽
                </div>
                <div className="bg-amber-400/20 text-amber-400 font-medium text-sm text-center leading-non px-4 py-4 rounded-xl mb-8">
                    Не забудьте указать копейки!
                </div>
                <p className="text-base font-normal text-white mb-8">
                    Внимание, оплатите именно 2 625.10 ₽ с копейками для моментальной обработки платежа. Так мы сможем отследить Ваш платёж очень быстро
                </p>
            </DialogCustom>
        </>
    )
}
