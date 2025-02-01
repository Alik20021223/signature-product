import { create } from "zustand";
import { Lang } from "@entities/pay/types";
import { LanguageMock } from "@entities/pay/mock";
import i18n from "i18next";

type State = {
  timeLeft: number; // Оставшееся время в секундах
  isTimerRunning: boolean; // Флаг для управления таймером
  isSearchDetails: boolean;
  activeLang: Lang;
};

type Actions = {
  startTimer: () => void; // Запуск таймера
  stopTimer: () => void; // Остановка таймера
  resetTimer: (seconds: number) => void; // Сброс таймера на указанное количество секунд
  decrementTime: () => void; // Уменьшение времени на 1 секунду
  formatTime: () => string;
  stopSearchDetails: () => void;
  changeLang: (activatedLang: Lang) => void;
};

export const usePayStore = create<State & Actions>((set, get) => ({
  timeLeft: 600,
  isTimerRunning: false,
  isSearchDetails: true,
  activeLang: LanguageMock[0],
  // Действия
  startTimer: () => {
    set({ isTimerRunning: true });
  },
  formatTime: () => {
    const seconds = get().timeLeft;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  },
  stopTimer: () => {
    set({ isTimerRunning: false });
  },
  resetTimer: (seconds) => {
    set({ timeLeft: seconds, isTimerRunning: true });
  },
  decrementTime: () => {
    set((state) => {
      if (state.timeLeft <= 0 || !state.isTimerRunning) {
        return state; // Не обновляем состояние, если время истекло или таймер остановлен
      }
      return { timeLeft: state.timeLeft - 1 };
    });
  },
  stopSearchDetails: () => {
    set({ isSearchDetails: false });
  },
  changeLang: (Language: Lang) => {
    i18n.changeLanguage(Language.tag);
    set({ activeLang: Language });
  },
}));
