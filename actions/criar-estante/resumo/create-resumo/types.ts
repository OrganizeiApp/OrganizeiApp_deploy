import { z } from "zod";
import { Resumo } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateResumo } from "./schema";

export type InputType = z.infer<typeof CreateResumo>;
export type ReturnType = ActionState<InputType, Resumo>;