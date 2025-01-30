import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {schema} from "./validation";
import {ContentAddFileTypes} from "@entities/pay/types";
import {Button} from "@shadcn/Button/button";
import { useState } from "react";

const ContentAddFile = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<ContentAddFileTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedClientName: "",
      selectedClientAmount: "",
    },
    mode: 'onChange',
  });

  const paymentProof = watch("paymentProof");

  const createPreviewHandler = (file?: File) => {
    if (!file) {
        return setPreview(null);
    }
    
    setPreview(file?.name)
  };

  const onSubmit = (data: ContentAddFileTypes) => {
    console.log("Form Data:", {
      ...data,
      paymentProof: data.paymentProof[0], // Получаем первый файл из списка
    });
  };

  return (
    <div>
      <div className="flex items-center gap-x-3 border border-black/10 dark:border-white/10 rounded-t-2xl px-4 py-4">
        <div className="w-full">
          <div className="text-black dark:text-white font-semibold leading-normal mb-1">
            Отправьте чек, это поможет найти платёж быстрее
          </div>
          <div className="text-sm text-black dark:text-white/80 font-medium leading-normal">
            Откройте операцию в банке и нажмите "Документы" или "Чек"
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 items-center p-4 border-x border-b border-black/10 dark:border-white/10 rounded-b-3xl">
        <img
          className="w-[200px] shrink-0"
          src="https://nicepayio.s3.eu-central-1.amazonaws.com/images/reciepts.png"
        />
        <div className="w-full md:p-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-3 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full border-2 border-black/40 dark:border-white/40 border-dashed rounded-2xl cursor-pointer bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 duration-200">
                <div className="flex flex-col items-center justify-center pt-4 pb-4">
                  <p className="mb-2 text-sm leading-none text-gray-500">
                    <span className="font-semibold">
                      {preview ? preview : 'Выбрать фото или скриншот'}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 leading-none">
                    {preview ? 'Файл выбран' : 'JPG, PNG or PDF'}
                  </p>
                </div>
                <Controller
                  name="paymentProof"
                  control={control}
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  render={({field: { onChange, value, ...rest }}) => (
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
                {errors.paymentProof?.message ? (
                  <p className="text-red-500">{errors.paymentProof?.message}</p>
                ) : null}
              </label>
            </div>
            {paymentProof?.length > 0 ? (
              <>
                <input
                  type="text"
                  {...register("selectedClientName")}
                  className="block px-4 py-4 w-full text-base font-semibold text-black dark:text-white bg-white/5 rounded-xl border-2 border-black/30 dark:border-white/10"
                  placeholder="Кто отправитель перевода? Имя."
                />
                <input
                  type="number"
                  {...register("selectedClientAmount", {valueAsNumber: true})}
                  className="block px-4 py-4 w-full text-base font-semibold text-black dark:text-white bg-white/5 rounded-xl border-2 border-black/30 dark:border-white/10"
                  placeholder="Сколько Вы перевели?"
                />
              </>
            ) : null}
            <Button
              disabled={!preview}
              type="submit"
              className="flex items-center justify-center rounded-xl bg-lime-400/90 text-black py-3 px-6 font-medium duration-200"
            >
              Отправить на проверку
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentAddFile;
