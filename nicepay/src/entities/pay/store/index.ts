import { create } from "zustand";
import { Lang, PaymentResponseType } from "@entities/pay/types";
import { LanguageMock } from "@entities/pay/mock";
import i18n from "i18next";

let initialDataPay: PaymentResponseType | null = null;

try {
  const storedData = localStorage.getItem("DataPay");
  if (storedData) {
    initialDataPay = JSON.parse(storedData);
  }
} catch (error) {
  console.error("Ошибка при разборе JSON из localStorage:", error);
  localStorage.removeItem("DataPay"); // Удаляем некорректные данные
}

type State = {
  isSearchDetails: boolean;
  activeLang: Lang;
  DataPay: PaymentResponseType | null;
};

type Actions = {
  stopSearchDetails: () => void;
  changeLang: (activatedLang: Lang) => void;
  saveData: (data: PaymentResponseType | undefined) => void;
};

export const usePayStore = create<State & Actions>((set) => ({
  DataPay: initialDataPay,
  isSearchDetails: true,
  activeLang: LanguageMock[0],
  saveData: (data) => {
    set({ DataPay: data });
    localStorage.setItem("DataPay", JSON.stringify(data));
  },
  stopSearchDetails: () => {
    set({ isSearchDetails: false });
  },
  changeLang: (Language: Lang) => {
    i18n.changeLanguage(Language.tag);
    set({ activeLang: Language });
  },
}));
