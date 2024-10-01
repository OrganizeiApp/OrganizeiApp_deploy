import { z } from "zod";

export const DeleteCaderno = z.object({
    id: z.string(),
});