import { z } from "zod";
import { IList } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateListOrder } from "./schema";

export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, IList[]>; //esperando um array de listas
