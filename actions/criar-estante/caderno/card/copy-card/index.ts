"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { CopyCard } from "./schema";

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
        const cardToCopy = await db.iCard.findUnique({
            where: {
                id,
                list: {
                    caderno: {
                        userId,
                    },
                },
            },
        });

        if (!cardToCopy) {
            return { error: "Item não encontrado" }
        }

        const lastCard = await db.iCard.findFirst({
            where: { listId: cardToCopy.listId },
            orderBy: { order: "desc" },
            select: { order: true }
        });

        const newOrder = lastCard ? lastCard.order + 1 : 1;

        card = await db.iCard.create({
            data: {
                title: `${cardToCopy.title} - Copia`,
                description: cardToCopy.description, 
                order: newOrder,
                listId: cardToCopy.listId,
            },
        });
    } catch (rror) {
        return {
            error: "Falha ao copiar."
        }
    }

    revalidatePath(`/caderno/${cadernoId}`);
    return { data: card };
};

export const copyCard = createSafeAction(CopyCard, handler);