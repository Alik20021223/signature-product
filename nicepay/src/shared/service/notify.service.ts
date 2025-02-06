import { TFunction } from "i18next";
import { toast } from "sonner";

class NotifyService {
  private notify: typeof toast;

  constructor() {
    this.notify = toast;
  }

  // Параметр t передаем в метод, чтобы использовать переводы
  public success(msg: string, t: TFunction) {
    this.notify.success(t("success"), {
      description: msg,
      className: "max-w-sm",
    });
  }

  public error(msg: string, t: TFunction) {
    this.notify.error(t("error"), {
      description: msg,
      className: "max-w-sm",
    });
  }

  public warning(msg: string, t: TFunction) {
    this.notify.warning(t("warning"), {
      description: msg,
      className: "max-w-sm",
    });
  }

  public info(msg: string, t: TFunction) {
    this.notify.info(t("info"), {
      description: msg,
      className: "max-w-sm",
    });
  }
}

export default new NotifyService();
