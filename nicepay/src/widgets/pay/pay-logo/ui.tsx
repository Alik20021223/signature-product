import { Button } from "@shadcn/Button/button"
import { useTranslation } from "react-i18next"


export const PayLogo = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className="pt-20 pb-8 px-4 md:px-6 flex justify-between items-center z-50 relative">
                <div className="flex gap-2 items-center">
                    <img className="h-[24px] sm:h-8" src="./logo-2.png" alt="" />
                    <h1 className="font-extrabold text-2xl leading-4 ">SalamPay</h1>
                </div>

                <div className="flex items-center gap-x-2">
                    <Button className="flex items-center justify-center gap-x-1.5 text-black dark:text-white text-sm font-medium bg-lime-300/20 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full h-10 px-4 cursor-pointer">
                        <span>{t('supportTxt')}</span>
                    </Button>
                </div >
            </div >
        </>
    )
}
