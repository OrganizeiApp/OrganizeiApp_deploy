"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { UpdateCResumo } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { id, resumoId, ...values } = data;
    let resumo;

    try {
        resumo = await db.resumo.update({
            where: {
                id,
                userId,
            },
            data: {
                ...values,
            },
        });
    } catch (error) {
        return {
            error: "Falha ao atualizar."
        }
    }

    revalidatePath(`/estante/${resumoId}`);
    return { data: resumo };
};

export const updateCResumo = createSafeAction(UpdateCResumo, handler);