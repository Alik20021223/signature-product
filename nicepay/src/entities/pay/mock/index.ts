import { CollapseCustomTypes, DetailsPaymentInfoProps, DetailsPaymentType } from "@entities/pay/types";

export const CollapseCustomMock: CollapseCustomTypes = {
    titleCollapse: 'Как перевести деньги в Таджикистан?',
    method_1: '"Платежи" → В другую страну',
    method_2: 'Таджикистан → НА КАРТУ ИЛИ СЧЕТ',
    method_3: ' Выберите "Банк Спитамен Банк, Получатель: Сафиев С."',
};

export const ContentDetailsPaymentData: DetailsPaymentInfoProps[] = [
    {
        text: '+992917166688',
        warning: 'Если вы переведёте на другие реквизиты или в другой банк, пополнение не поступит',
    },
    {
        text: '2625.10 ₽',
        describe: 'К сумме были добавлены копейки, сейчас 2 625.10 ₽. Отправляйте точную сумму, чтобы пополнение поступило моментально',
    }
]

export const ContentDetailsData: DetailsPaymentType = {
    price: '2625.10',
    transferToWhere: 'Перевод в Банк Таджикистана (+992)',
    detailsPay: 'Банк Алиф Банк, Получатель: Safarov I.',
    imgCountry: 'https://nicepayio.s3.eu-central-1.amazonaws.com/icons/payment/tajikistan.png',
}
