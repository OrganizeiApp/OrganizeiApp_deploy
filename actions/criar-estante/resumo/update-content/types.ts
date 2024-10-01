import { z } from "zod";
import { Resumo } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateCResumo } from "./schema";

export type InputType = z.infer<typeof UpdateCResumo>;
export type ReturnType = ActionState<InputType, Resumo>;
