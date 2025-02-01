import { Button } from "@shadcn/Button/button"


export const PayLogo = () => {
    return (
        <>
            <div className="pt-20 pb-8 px-4 md:px-6 flex justify-between items-center z-50 relative">
                <img className="h-[24px] sm:h-8" src="https://nicepayio.s3.eu-central-1.amazonaws.com/brand/logo.svg" alt="" />
                <div className="flex items-center gap-x-2">
                    <Button className="flex items-center justify-center gap-x-1.5 text-black dark:text-white text-sm font-medium bg-lime-300/20 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full h-10 px-4 cursor-pointer">
                        <img className="hidden w-6 h-6" src="https://nicepayio.s3.eu-central-1.amazonaws.com/icons/nerd-face_1f913.png" />
                        <span>Поддержка</span>
                    </Button>
                </div >
            </div >
        </>
    )
}
