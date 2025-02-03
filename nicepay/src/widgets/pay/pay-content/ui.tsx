import { ContentHeader } from "@entities/pay/ui/content-header";
import { ContentDetails } from "@entities/pay/ui/content-details";
import { ContentDetailsData } from "@entities/pay/mock";
import { usePayStore } from "@entities/pay/store";

import { ButtonCustom } from "@feature/ButtonCustom";
import { useTranslation } from "react-i18next";
import { PayLoading } from "@widgets/pay/pay-loading";
import { ContentDialogCommission } from "@entities/pay/ui/content-dialog-сommission";
import { useNavigate } from "react-router-dom";

export const PayContent = () => {
    const {
        isSearchDetails
    } = usePayStore();

    const navigate = useNavigate()

    const { t } = useTranslation()

    function SendMoney() {
        navigate('/confirm')
    }

    return (
        <>
            {
                isSearchDetails
                    ?
                    <PayLoading />
                    :
                    <>
                        <ContentDialogCommission />
                        <ContentHeader />
                        <ContentDetails data={ContentDetailsData} />
                        <ButtonCustom onClick={SendMoney} text={t('sendTransferTxt')} />
                    </>
            }
        </>
    );
};
