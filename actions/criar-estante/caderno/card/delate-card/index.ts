"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { DeleteCard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { id, cadernoId } = data; //preciso do boardId tbm
    let card;

    try {
        card = await db.iCard.delete({
            where: {
                id,
                list: {
                    caderno: {
                        userId,
                    },
                },
            },
        });
    } catch (rror) {
        return {
            error: "Falha ao deletar."
        }
    }

    revalidatePath(`/caderno/${cadernoId}`);
    return { data: card };
};

export const deleteCard = createSafeAction(DeleteCard, handler);