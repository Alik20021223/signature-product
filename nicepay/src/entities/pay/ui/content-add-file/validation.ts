import {z} from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export const schema = z.object({
  paymentProof: z
    .custom<FileList>()
    .refine((files) => files?.length >= 1, "File is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "File size must be less than 5MB."
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png or pdf formats are supported."
    ),
  selectedClientName: z.string().min(1, "Введите имя отправителя"),
  selectedClientAmount: z
    .number({invalid_type_error: "Введите сумму"})
    .positive("Сумма должна быть положительной"),
});
