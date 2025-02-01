import { ContentTimer } from "@entities/pay/ui/content-timer";
import { ContentHeader } from "@entities/pay/ui/content-header";
import { ContentDetails } from "@entities/pay/ui/content-details";
import { ContentDetailsData, PayHeaderMock } from "@entities/pay/mock";
import { useEffect } from "react";
import { usePayStore } from "@entities/pay/store";
import PayHeader from "@entities/pay/ui/pay-header";
import { ButtonCustom } from "@feature/ButtonCustom";
import { PayLogo } from "@widgets/pay/pay-logo";
import { PayLoading } from "@widgets/pay/pay-loading";
import { useTranslation } from "react-i18next";
import { PopoverLang } from "@feature/PopoverLang";

export const PayContent = () => {
    const {
        formatTime,
        timeLeft,
        decrementTime,
        isTimerRunning,
        startTimer,
        resetTimer,
        isSearchDetails
    } = usePayStore();

    const { t } = useTranslation()

    useEffect(() => {
        resetTimer(600);
        startTimer();
    }, [isSearchDetails]);

    useEffect(() => {
        if (timeLeft <= 0 || !isTimerRunning) return;

        const timer = setInterval(() => {
            decrementTime();
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, isTimerRunning]);

    return (
        <>
            <div className="md:pb-10 md:px-6 z-50 relative">
                <PayLogo />
                <PayHeader data={PayHeaderMock} />
                <div className="relative md:bg-white/60 flex flex-col dark:md:bg-white/10 md:rounded-2xl pt-4 pb-8 px-4 md:px-6 md:py-7 md:min-h-[400px] overflow-hidden">
                    {
                        isSearchDetails
                            ?
                            <PayLoading />
                            :
                            <>
                                <ContentHeader />
                                <ContentTimer time={formatTime()} />
                                <ContentDetails data={ContentDetailsData} />
                                <ButtonCustom text={t('sendTransferTxt')} />
                            </>
                    }
                </div>
                <div className="flex justify-between items-center px-4 md:px-8 md:py-6 mb-10">
                    <a href="https://nicepay.io" rel="noopener noreferrer" target="_blank" className="text-xs text-gray-500 dark:text-white/50 font-medium leading-none hover:opacity-70 duration-200">© NicePay.io</a>
                    <PopoverLang />
                </div>
            </div>
        </>
    );
};
