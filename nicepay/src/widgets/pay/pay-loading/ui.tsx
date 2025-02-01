import { usePayStore } from "@entities/pay/store";
import { Loading } from "@shared/ui/Loading"
import { useEffect } from "react";


export const PayLoading = () => {
    const {  stopSearchDetails } = usePayStore()


    useEffect(() => {
        // Устанавливаем таймер на 3 секунды
        const timer = setTimeout(() => {
            stopSearchDetails(); // Скрываем блок через 3 секунды
        }, 3000);

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
    }, []); // Пустой массив зависимостей, чтобы эффект сработал только при монтировании

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full flex-grow">
                <div className="h-32 w-32">
                    <Loading />
                </div>
                <p className="text-3xl font-bold text-black dark:text-white leading-none">
                    Ищем реквизиты...
                </p>
            </div>
        </>
    )
}
