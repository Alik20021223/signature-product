import { ContentHeader } from "@entities/pay/ui/content-header";
import { ContentDetails } from "@entities/pay/ui/content-details";
// import { ContentDetailsData } from "@entities/pay/mock";
import { usePayStore } from "@entities/pay/store";
import { ButtonCustom } from "@feature/ButtonCustom";
import { useTranslation } from "react-i18next";
import { PayLoading } from "@widgets/pay/pay-loading";
import { ContentDialogCommission } from "@entities/pay/ui/content-dialog-сommission";
import { useNavigate, useParams } from "react-router-dom";
import { useMutationPostDetailPayment } from "@entities/pay/hooks/use-mutation-post-detailPayment";
import { useEffect } from "react";

export const PayContent = () => {
    const { isSearchDetails, stopSearchDetails } = usePayStore();
    const navigate = useNavigate();
    const { id } = useParams();
    const { t } = useTranslation();
    const { mutateAsync } = useMutationPostDetailPayment();
    const { DataPay, saveData } = usePayStore();

    useEffect(() => {
        if (!id) return; // Если id нет, не делаем запрос

        console.log("Текущие данные:", DataPay);

        if (DataPay) {
            if (!DataPay?.requisites || DataPay?.id !== Number(id)) {
                mutateAsync(Number(id))
                    .then((data) => {
                        saveData(data);
                        stopSearchDetails();
                    })
            } else {
                stopSearchDetails();
            }
        }
    }, [id, DataPay]);

    function SendMoney() {
        navigate(`/${id}/confirm`);
    }

    return (
        <>
            {isSearchDetails && DataPay ? (
                <PayLoading />
            ) : (
                <>
                    {
                        DataPay &&
                        <>
                            <ContentDialogCommission data={DataPay} />
                            <ContentHeader />
                            <ContentDetails data={DataPay} />
                            <ButtonCustom onClick={SendMoney} text={t("sendTransferTxt")} />
                        </>
                    }
                </>
            )}
        </>
    );
};

