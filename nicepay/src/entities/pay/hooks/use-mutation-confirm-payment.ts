import { useMutation, useQueryClient } from "@tanstack/react-query";
import paymentService from "../service/payment.service";

export function useMutationConfirmPay() {
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess, isError, isPending, isIdle } = useMutation({
    mutationKey: ["confirm-pay"],
    mutationFn: (payload: number) => paymentService.confirmPayment(payload),
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return { mutateAsync, isSuccess, isError, isPending, isIdle };
}
