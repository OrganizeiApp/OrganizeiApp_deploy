"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { CreateCard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { title, cadernoId, listId } = data;
    let card;

    try {
      const list = await db.iList.findUnique({
        where: {
            id: listId,
            caderno: {
                userId,
            },
        },
      });

      if (!list) {
        return {
            error: "Página não encontrada",
        };
      }
      

      const lastCard = await db.card.findFirst({
        where: { listId },
        orderBy: { order: "desc" },
        select: { order: true },
      });

      const newOrder = lastCard ? lastCard.order + 1 : 1;

      card = await db.card.create({
        data: {
            title,
            listId,
            order: newOrder,
        },
      });
    } catch (error) {
        console.error("Erro ao atualizar a página:", error);
        return {
        error: "Falha ao atualizar."
    };
    }

    revalidatePath(`/caderno/${cadernoId}`);
    return { data: card };
};

export const createCard = createSafeAction(CreateCard, handler);