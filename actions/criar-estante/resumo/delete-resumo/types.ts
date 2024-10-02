import { z } from "zod";
import { Resumo } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { DeleteResumo } from "./schema";

export type InputType = z.infer<typeof DeleteResumo>;
export type ReturnType = ActionState<InputType, Resumo>;
