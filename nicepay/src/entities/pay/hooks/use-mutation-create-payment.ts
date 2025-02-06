import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPaymentType } from "@entities/pay/types";
import paymentService from "../service/payment.service";

export function useMutationCreatePayment() {
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess, isError, isPending, isIdle } = useMutation({
    mutationKey: ["create-payment"],
    mutationFn: (payload: createPaymentType) =>
      paymentService.createPayment(payload),
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return { mutateAsync, isSuccess, isError, isPending, isIdle };
}
