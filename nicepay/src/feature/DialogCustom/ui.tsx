import { Button } from "@shadcn/Button/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@shadcn/Dialog/dialog";

interface DialogCustomProps {
    defaultOpen: boolean;
    ButtonOpen?: string;
    title: string;
    children: React.ReactNode;
    submitText: string,
}

export const DialogCustom: React.FC<DialogCustomProps> = ({
    title,
    defaultOpen = false,
    ButtonOpen,
    children,
    submitText
}) => {
    return (
        <Dialog defaultOpen={defaultOpen}>
            {ButtonOpen ? (
                <DialogTrigger asChild>
                    <Button variant="outline">{ButtonOpen}</Button>
                </DialogTrigger>
            ) : null}
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-white mb-4">
                        {title}
                    </DialogTitle>
                </DialogHeader>
                {children}
                <DialogFooter>
                    <Button className="flex items-center justify-between rounded-xl bg-amber-400/90 dark:bg-amber-400/90 text-black opacity-100 hover:opacity-80 py-4 px-4 text-base font-bold disabled:opacity-70 disabled:cursor-default duration-200 w-full" type="submit">
                        {submitText}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
