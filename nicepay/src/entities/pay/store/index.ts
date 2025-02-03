import { create } from "zustand";
import { Lang } from "@entities/pay/types";
import { LanguageMock } from "@entities/pay/mock";
import i18n from "i18next";

type State = {
  isSearchDetails: boolean;
  activeLang: Lang;
};

type Actions = {
  stopSearchDetails: () => void;
  changeLang: (activatedLang: Lang) => void;
};

export const usePayStore = create<State & Actions>((set) => ({
  timeLeft: 600,
  isTimerRunning: false,
  isSearchDetails: true,
  activeLang: LanguageMock[0],
  stopSearchDetails: () => {
    set({ isSearchDetails: false });
  },
  changeLang: (Language: Lang) => {
    i18n.changeLanguage(Language.tag);
    set({ activeLang: Language });
  },
}));
