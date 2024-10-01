"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { UpdateCaderno } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { title, id } = data;
    let caderno;

    try {
        caderno = await db.caderno.update({
            where: {
                id,
                userId,
            },
            data: {
                title,
            },
        });
    } catch (error) {
        return {
            error: "Falha ao atualizar."
        }
    }

    revalidatePath('/caderno/${id}');
    return { data: caderno };
};

export const updateCaderno = createSafeAction(UpdateCaderno, handler);