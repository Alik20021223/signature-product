import { useState } from "react";
import { FormAddFile } from "./form";
import { useTranslation } from "react-i18next";

const ContentAddFile = () => {

  const [success, setSuccess] = useState<boolean>(false)

  const { t } = useTranslation()

  return (
    <div>
      <div className="flex items-center gap-x-3 border border-black/10 dark:border-white/10 rounded-t-2xl px-4 py-4">
        <div className="w-full">
          <div className="text-black dark:text-white font-semibold leading-normal mb-1">
            {t('sendCheckConfirmTxt')}
          </div>
          <div className="text-sm text-black dark:text-white/80 font-medium leading-normal">
            {t('sendCheckDescribeTxt')}
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 items-center p-4 border-x border-b border-black/10 dark:border-white/10 rounded-b-3xl">
        <img
          className="w-[200px] shrink-0"
          src="https://nicepayio.s3.eu-central-1.amazonaws.com/images/reciepts.png"
        />
        <div className="w-full md:p-3">
          {success
            ?
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center px-5 border-2 border-lime-400/40 dark:border-lime-400/40 border-dashed rounded-2xl cursor-pointer bg-lime-400/10 dark:bg-lime-400/10 duration-200 w-full mb-3">
                <div className="pt-4 pb-4">
                  <p className="text-sm leading-none text-lime-400">
                    <span className="font-semibold">{t('confirmMessageTxt')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            :
            <FormAddFile onSuccess={setSuccess} />
          }
        </div>
      </div>
    </div>
  );
};

export default ContentAddFile;
