import { useMutation, useQueryClient } from "@tanstack/react-query";
import paymentService from "../service/payment.service";

export function useMutationPostDetailPayment() {
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess, isError, isPending, isIdle, data } =
    useMutation({
      mutationKey: ["post-detail-payment"],
      mutationFn: (id: number) => paymentService.infoDetailPayment(id),
      onSuccess: () => queryClient.invalidateQueries(),
    });

  return { mutateAsync, isSuccess, isError, isPending, isIdle, data };
}
