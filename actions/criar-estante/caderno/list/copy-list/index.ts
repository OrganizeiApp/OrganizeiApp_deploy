"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { CopyList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { id, cadernoId } = data; //preciso do boardId tbm
    let list;

    try {
        const listToCopy = await db.iList.findUnique({
            where: {
                id,
                cadernoId,
                caderno: {
                    userId,
                },
            },
            include: {
                cards: true
            },
        });
        if (!listToCopy) {
            return { error: "Lista não encontrada "};
        }

        const lastList = await db.iList.findFirst({
            where: { cadernoId },
            orderBy: { order: "desc" },
            select: { order: true },
        });

        const newOrder = lastList ? lastList.order + 1 : 1;

        list = await db.iList.create({
            data: {
                cadernoId: listToCopy.cadernoId,
                title: `${listToCopy.title} - Copia `,
                order: newOrder, 
                cards: {
                    createMany: {
                        data: listToCopy.cards.map((card) => ({
                            title: card.title,
                            description: card.description,
                            order: card.order,
                        })),
                    },
                },
            },
        });
    } catch (rror) {
        return {
            error: "Falha ao copiar."
        }
    }

    revalidatePath(`/caderno/${cadernoId}`);
    return { data: list };
};

export const copyList = createSafeAction(CopyList, handler);