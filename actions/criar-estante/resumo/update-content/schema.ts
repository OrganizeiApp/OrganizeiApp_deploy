import { z } from "zod";

export const UpdateCResumo = z.object({
    resumoId: z.string(),
    content: z.union([
        z.string().min(1, {
            message: "Conteúdo inválido.",
        }),
        z.undefined() // Permite que o campo seja opcional
    ]).optional(),
    title: z.union([
        z.string({
            required_error: "Título é necessário.",
            invalid_type_error: "Título é necessário.",
        }).min(3, {
            message: "Título é muito curto!",
        }),
        z.undefined() // Permite que o campo seja opcional
    ]).optional(),
    id: z.string(),
});
