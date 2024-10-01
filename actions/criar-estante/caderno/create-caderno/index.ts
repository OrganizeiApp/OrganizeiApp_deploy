"use server";

import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateCaderno } from "./schema";
import { getUserById } from "@/data/user";
import { auth } from "@/auth";
import { incrementAvailableCount, hasAvailableCount } from "@/lib/estante-limit";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const canCreate = await hasAvailableCount();

    if (!canCreate) {
        return {
            error: "Você atingiu o limite máximo de rotinas da fase de testes!"
        }
    }

    const { title } = data;

    let caderno;

    try {
        caderno = await db.caderno.create({
            data: {
                title,
                userId: session.user.id,
            },
        });

        await incrementAvailableCount();

    } catch (error) {
        return {
        error: "falha ao criar."
        }
    }

    revalidatePath(`/estante/${caderno.id}`);
    return { data: caderno };
};

export const createCaderno = createSafeAction(CreateCaderno, handler);