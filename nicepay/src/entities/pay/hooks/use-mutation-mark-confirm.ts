import { useMutation, useQueryClient } from "@tanstack/react-query";
import paymentService from "../service/payment.service";

export function useMutationMarkConfirm() {
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess, isError, isPending, isIdle } = useMutation({
    mutationKey: ["mark-confirm"],
    mutationFn: ({ id, payload }: { id: number; payload: string }) =>
      paymentService.sendPhotoConfirm(payload, id),
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return { mutateAsync, isSuccess, isError, isPending, isIdle };
}
