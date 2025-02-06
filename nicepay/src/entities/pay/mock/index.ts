import {
  DetailsPaymentInfoProps,
  DetailsPaymentType,
  Lang,
  PayHeaderType,
} from "@entities/pay/types";

export const ContentDetailsPaymentData: DetailsPaymentInfoProps[] = [
  {
    text: "+992917166688",
  },
  {
    text: "2625.10 ₽",
    describe: true,
  },
];

export const ContentDetailsData: DetailsPaymentType = {
  price: "2625.10",
  transferToWhere: "Перевод в Банк Таджикистана (+992)",
  detailsPay: "Банк Алиф Банк, Получатель: Safarov I.",
  imgCountry:
    "https://nicepayio.s3.eu-central-1.amazonaws.com/icons/payment/tajikistan.png",
};

export const LanguageMock: Lang[] = [
  {
    name: "Русский",
    tag: "ru",
    url: "https://nicepayio.s3.eu-central-1.amazonaws.com/flags/country-ru.svg",
  },
  {
    name: "Français",
    tag: "fr",
    url: "https://nicepayio.s3.eu-central-1.amazonaws.com/flags/country-fr.svg",
  },
  {
    name: "عربي",
    tag: "ae",
    url: "https://nicepayio.s3.eu-central-1.amazonaws.com/flags/country-ae.svg",
  },
];

export const PayHeaderMock: PayHeaderType = {
  name: "Lolzteam market",
  price: "2625.10 ₽",
  comissia: "0",
};
