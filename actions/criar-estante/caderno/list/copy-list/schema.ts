import { z } from "zod";

export const CopyList = z.object({
    id: z.string(),
    cadernoId: z.string(), //preciso do boardId tambem
});