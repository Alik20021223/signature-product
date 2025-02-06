import notifyService from '@shared/service/notify.service'
import { Copy } from '@assets/Copy'
import { useTranslation } from 'react-i18next'

interface DetailsPaymentInfoApp {
    data: string
}

export const DetailsPaymentInfo: React.FC<DetailsPaymentInfoApp> = ({ data }) => {

    const { t } = useTranslation()

    function onCopy() {
        navigator.clipboard.writeText(data)
        notifyService.info(t('copyTxt'), t)
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10 mb-3">
            <div className="px-5 py-5 hover:bg-white/5 cursor-pointer duration-200">
                <div
                    onClick={onCopy}
                    className="flex items-center justify-between text-2xl font-semibold text-black dark:text-white leading-none"
                >
                    <div dir='ltr'>
                        {data}
                    </div>
                    <Copy />
                </div>
            </div>
        </div>
    )
}
