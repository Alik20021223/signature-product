import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validation";
import { ContentAddFileTypes } from "@entities/pay/types";
import { Button } from "@shadcn/Button/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import notifyService from "@shared/service/notify.service";
import { useParams } from "react-router-dom";
import { useMutationMarkConfirm } from "@entities/pay/hooks/use-mutation-mark-confirm";
import { fileToBase64 } from "@app/lib/utils";

interface FormAddFileProps {
    onSuccess: (value: boolean) => void
}

export const FormAddFile: React.FC<FormAddFileProps> = ({ onSuccess }) => {

    const [preview, setPreview] = useState<string | null>(null);
    const { t } = useTranslation()
    const { id } = useParams()
    const { mutateAsync } = useMutationMarkConfirm()
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
        setValue
    } = useForm<ContentAddFileTypes>({
        resolver: zodResolver(schema),
        defaultValues: {
            selectedClientName: "",
            selectedClientAmount: "",
        },
        mode: 'onChange',
    });

    useEffect(() => {
        if (errors.paymentProof?.message) {
            notifyService.error(errors.paymentProof?.message, t);
            const dataTransfer = new DataTransfer();
            setValue("paymentProof", dataTransfer.files); // Устанавливаем пустой FileList
            setPreview(null);
        }
    }, [errors.paymentProof]);

    const paymentProof = watch("paymentProof");

    const createPreviewHandler = (file?: File) => {
        if (!file) {
            return setPreview(null);
        }

        setPreview(file?.name)
    };


    const onSubmit = async (data: ContentAddFileTypes) => {
        try {
            let fileBase64 = await fileToBase64(data.paymentProof[0]);
            fileBase64 = fileBase64.split(",")[1];
            await mutateAsync({
                id: Number(id), // Преобразуем id в число
                payload: fileBase64, // Передаем файл в формате base64
            });
            onSuccess(true); // Успешная отправка
        } catch {
            notifyService.error("Ошибка при отправке формы", t);
        }
    };



    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-3 w-full"
            >
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full border-2 border-black/40 dark:border-white/40 border-dashed rounded-2xl cursor-pointer bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 duration-200">
                        <div className="flex flex-col items-center justify-center pt-4 pb-4">
                            <p className="mb-2 text-sm leading-none text-gray-500">
                                <span className="font-semibold">
                                    {preview ? preview : t('fileSelectPrompt')}
                                </span>
                            </p>
                            <p className="text-xs text-gray-500 leading-none">
                                {preview ? t('fileSelected') : t('fileFormats')}
                            </p>
                        </div>
                        <Controller
                            name="paymentProof"
                            control={control}
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            render={({ field: { onChange, value, ...rest } }) => (
                                <input
                                    type="file"
                                    {...rest}
                                    onChange={(e) => {
                                        onChange(e.target.files)
                                        createPreviewHandler(e.target.files?.[0])
                                    }}
                                    className="hidden"
                                    multiple
                                />
                            )}
                        />

                    </label>
                </div>
                {paymentProof?.length > 0 ? (
                    <>
                        <input
                            type="text"
                            {...register("selectedClientName")}
                            className="block px-4 py-4 w-full text-base font-semibold text-black dark:text-white bg-white/5 rounded-xl border-2 border-black/30 dark:border-white/10"
                            placeholder={t("senderNamePlaceholder")}
                        />
                        <input
                            type="number"
                            {...register("selectedClientAmount", { valueAsNumber: true })}
                            className="block px-4 py-4 w-full text-base font-semibold text-black dark:text-white bg-white/5 rounded-xl border-2 border-black/30 dark:border-white/10"
                            placeholder={t("amountPlaceholder")}
                        />
                    </>
                ) : null}
                <Button
                    disabled={!preview}
                    type="submit"
                    className="flex items-center justify-center rounded-xl bg-lime-400/90 text-black py-3 px-6 font-medium duration-200"
                >
                    {t("submitForReview")}
                </Button>
            </form>
        </>
    )
}
