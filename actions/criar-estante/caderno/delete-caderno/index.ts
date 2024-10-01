"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { DeleteCaderno } from "./schema";
import { redirect } from "next/navigation";
import { decreaseAvailableCount } from "@/lib/rotina-limit";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { id } = data;
    let caderno;

    try {
        caderno = await db.caderno.delete({
            where: {
                id,
                userId,
            },
        });
        
    await decreaseAvailableCount();

    } catch (error) {
        return {
            error: "Falha ao deletar."
        }
    }

    revalidatePath('/estante');
    redirect(`/estante`);
};

export const deleteCaderno = createSafeAction(DeleteCaderno, handler);