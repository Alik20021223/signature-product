import React from "react"
import { BorrowLeft } from "@assets/BorrowLeft";
import { useTranslation } from "react-i18next";

export const CollapseCustom= () => {

    const [openCollapse, setOpenCollapse] = React.useState<boolean>(false)

    const { t } = useTranslation()

    return (
        <>
            <div className="mb-3">
                <div onClick={() => setOpenCollapse(!openCollapse)} className={`${openCollapse ? 'rounded-t-2xl' : 'rounded-2xl'} flex items-center justify-between text-black dark:text-white bg-amber-400/20 border border-amber-400 px-4 font-semibold py-3 cursor-pointer`}>
                    <div>{t('howToSendMoneyTajTxt')}</div>
                    <BorrowLeft />
                </div>
                {openCollapse ? <div className="bg-amber-400/10 rounded-b-2xl text-black dark:text-white text-sm px-4 font-bold py-5 mb-3">
                    <div className="mb-5">{t('howToSendMoneyTajTitle')}</div>
                    <div className="space-y-2 mb-5">
                        <div>1. {t('howToSendMoneyTajMethod1')}</div>
                        <div>2. {t('howToSendMoneyTajMethod2')}</div>
                        <div>3. {t('howToSendMoneyTajMethod3')}</div>
                        <div>4. {t('howToSendMoneyTajEntrySum')}</div>
                    </div>
                    <div>{t('howToSendMoneyTajDescribe')}</div>
                </div> : null}
            </div>
        </>
    )
}
