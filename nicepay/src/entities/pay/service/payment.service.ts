import { httpApi } from "@shared/utils/axios";
import { API_URLS } from "../constant/api-urls";
import { createPaymentType, PaymentResponseType } from "../types";

class PaymentService {
  async createPayment(data: createPaymentType): Promise<PaymentResponseType> {
    const response = await httpApi.post<PaymentResponseType>(
      API_URLS.createPay,
      data
    );
    return response.data; // ✅ Ошибки пробросятся автоматически
  }

  async confirmPayment(id: number): Promise<PaymentResponseType> {
    const response = await httpApi.post<PaymentResponseType>(
      `${id}/${API_URLS.confirmPay}`
    );
    return response.data;
  }

  async infoDetailPayment(id: number): Promise<PaymentResponseType> {
    const response = await httpApi.post<PaymentResponseType>(
      `${id}/${API_URLS.detailsPay}`
    );
    return response.data;
  }

  async getInfoPayment(id: number): Promise<PaymentResponseType> {
    const response = await httpApi.get<PaymentResponseType>(`${id}`);
    return response.data;
  }

  async sendPhotoConfirm(
    receipt: string,
    id: number
  ): Promise<PaymentResponseType> {
    const response = await httpApi.post<PaymentResponseType>(
      `${id}/${API_URLS.makeConfirmPay}`,
      receipt
    );
    return response.data;
  }
}

export default new PaymentService();
