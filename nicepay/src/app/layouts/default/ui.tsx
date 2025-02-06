import PayHeader from "@entities/pay/ui/pay-header";
import { PayLogo } from "@widgets/pay/pay-logo";
import { PopoverLang } from "@feature/PopoverLang";
import { Outlet, useParams } from "react-router-dom";
import { useQueryPayment } from "@entities/pay/hooks/use-query-get-payment";
import { usePayStore } from "@entities/pay/store";
import { useEffect } from "react";

export const DefaultLayout = () => {

    const { id } = useParams();
    const { saveData } = usePayStore()

    const { data } = useQueryPayment(Number(id));

    console.log(data);
    

    useEffect(() => {
        
        saveData(data)
    }, [data, id])

    return (
        <>
            <div className="md:pb-10 md:px-6 z-50 relative">
                <PayLogo />
                <PayHeader data={data} />
                <div className="relative flex flex-col dark:md:bg-white/10 md:rounded-2xl rounded-xl pt-4 pb-8 px-4 md:px-6 md:py-7 md:min-h-[350px] overflow-hidden">
                    <Outlet />
                </div>
                <div className="flex justify-between items-center px-4 md:px-8 md:py-6 mb-10">
                    <a href="#" rel="noopener noreferrer" target="_blank" className="text-xs text-gray-500 dark:text-white/50 font-medium leading-none hover:opacity-70 duration-200">© SalamPay.io</a>
                    <PopoverLang />
                </div>
            </div>
        </>
    )
}
