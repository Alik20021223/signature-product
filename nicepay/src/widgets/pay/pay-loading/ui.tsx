
import { Loading } from "@shared/ui/Loading"
import { useTranslation } from "react-i18next";


export const PayLoading = () => {
    
    const { t } = useTranslation()

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full flex-grow">
                <div className="h-32 w-32">
                    <Loading />
                </div>
                <p className="text-3xl font-bold text-black dark:text-white leading-none">
                    {t('searchDetailsTxt')}
                </p>
            </div>
        </>
    )
}
