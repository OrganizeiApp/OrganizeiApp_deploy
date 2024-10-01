import { z } from "zod";

export const CopyCard = z.object({
    id: z.string(),
    cadernoId: z.string(), //preciso do boardId tambem
});