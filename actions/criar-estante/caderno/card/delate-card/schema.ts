import { z } from "zod";

export const DeleteCard = z.object({
    id: z.string(),
    cadernoId: z.string(), //preciso do boardId tambem
});