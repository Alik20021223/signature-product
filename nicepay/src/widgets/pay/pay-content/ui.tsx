import { ContentTimer } from "@entities/pay/ui/content-timer/ui";
import { ContentHeader } from "@entities/pay/ui/content-header";
import { ContentDetails } from "@entities/pay/ui/content-details/ui";
import { ContentDetailsData } from "@entities/pay/mock";
import { Button } from "@shadcn/Button/button";
import { useEffect } from "react";
import { usePayStore } from "@entities/pay/store";

export const PayContent = () => {
    const { formatTime, timeLeft, decrementTime, isTimerRunning, startTimer, resetTimer } = usePayStore();

    useEffect(() => {
        resetTimer(600); // Сброс таймера на 10 минут
        startTimer(); // Запуск таймера
    }, [resetTimer, startTimer]);

    useEffect(() => {
        if (timeLeft <= 0 || !isTimerRunning) return; // Останавливаем таймер, если время вышло или не запущен

        const timer = setInterval(() => {
            decrementTime();
        }, 1000);

        return () => clearInterval(timer); // Очищаем таймер при размонтировании компонента
    }, [timeLeft, isTimerRunning]);

    return (
        <div className="relative md:bg-white/60 dark:md:bg-white/10 md:rounded-2xl pt-4 pb-8 px-4 md:px-7 md:py-7 md:min-h-[400px] overflow-hidden">
            <ContentHeader />
            <ContentTimer time={formatTime()} />
            <ContentDetails data={ContentDetailsData} />
            <Button className="flex items-center justify-center w-full rounded-xl bg-lime-300 dark:text-black hover:opacity-80 py-4 px-4 text-prebase font-semibold disabled:opacity-70 disabled:cursor-default duration-200 col-span-2">
                Я отправил перевод
            </Button>
        </div>
    );
};
