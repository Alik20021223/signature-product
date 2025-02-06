import { useQuery } from "@tanstack/react-query";
import paymentService from "../service/payment.service";

export function useQueryPayment(id: number) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["get-info-payment", id],
    queryFn: () => paymentService.getInfoPayment(id),
    enabled: !!id,
    staleTime: Infinity,
  });

  return { isLoading, isError, data, error };
}
