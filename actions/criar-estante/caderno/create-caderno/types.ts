import { z } from "zod";
import { Caderno } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateCaderno } from "./schema";

export type InputType = z.infer<typeof CreateCaderno>;
export type ReturnType = ActionState<InputType, Caderno>;