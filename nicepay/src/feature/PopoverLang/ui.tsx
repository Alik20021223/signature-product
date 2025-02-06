// import { Dialog, DialogContent, DialogTrigger } from "@shadcn/Dialog"
import { Lang } from "@entities/pay/types"
import { LanguageMock } from "@entities/pay/mock"
import { usePayStore } from "@entities/pay/store"
import { Popover, PopoverContent, PopoverTrigger } from "@shadcn/Popover"
import { useState } from "react"


export const PopoverLang = () => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const { activeLang, changeLang } = usePayStore()

    const handleChangeLang = (item: Lang) => {
        changeLang(item)
        setOpen(false)
    }


    return (
        <>
            {isOpen && <div className="fixed inset-0 transition-opacity z-50 bg-gray-200/75 dark:bg-black/50"></div>}
            <Popover onOpenChange={setOpen} open={isOpen}>
                <PopoverTrigger className="text-xs text-gray-500 dark:text-white/50 font-medium leading-none hover:opacity-70 duration-200">{activeLang.name}</PopoverTrigger>
                <PopoverContent className="dark:border-none  overflow-hidden focus:outline-none relative bg-white dark:bg-gray-600/10 backdrop-blur-xl ring-gray-200 dark:ring-gray-800 ring-0 rounded-xl shadow-lg">
                    <div className="flex flex-col">
                        {LanguageMock.map((item) => (
                            <div key={item.tag} onClick={() => handleChangeLang(item)} className="flex items-center gap-x-3 text-base text-black dark:text-white text-medium hover:bg-white/10 rounded-lg px-2 py-2 duration-200 cursor-pointer">
                                <img src={item.url} alt={item.tag} className="h-4" />
                                <span className="truncate">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}
