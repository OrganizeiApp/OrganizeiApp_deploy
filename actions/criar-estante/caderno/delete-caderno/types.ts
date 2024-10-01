import { z } from "zod";
import { Caderno } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { DeleteCaderno } from "./schema";

export type InputType = z.infer<typeof DeleteCaderno>;
export type ReturnType = ActionState<InputType, Caderno>;
