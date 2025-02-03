import { Button } from "@shadcn/Button/button"

interface ButtonCustom {
    text: string,
    onClick: () => void
}

export const ButtonCustom: React.FC<ButtonCustom> = ({ text, onClick }) => {
    return (
        <>
            <Button onClick={onClick} className="flex items-center justify-center w-full rounded-xl bg-lime-300 dark:text-black hover:opacity-80 py-4 px-4 text-prebase font-medium disabled:opacity-70 disabled:cursor-default duration-200">
                {text}
            </Button>
        </>
    )
}
