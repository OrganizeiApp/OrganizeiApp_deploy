import { z } from "zod";

export const DeleteResumo = z.object({
    id: z.string(),
});