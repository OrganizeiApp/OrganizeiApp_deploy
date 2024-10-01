"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { CreateList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { title, cadernoId } = data;
    let list;

    try {
        const caderno = await db.caderno.findUnique({
            where: {
                id: cadernoId,
                userId,
            },
        });

        if (!caderno) {
            return {
                error: "Rotina não encontrada!",
            };
        }

        const lastList = await db.iList.findFirst({
            where: { cadernoId: cadernoId },
            orderBy: { order: "desc" },
            select: { order: true },
        });

        const newOrder = lastList ? lastList.order + 1 : 1;

        list = await db.iList.create({
            data: {
                title,
                cadernoId,
                order: newOrder,
            },
        });
    } catch (error) {
        console.error("Erro ao atualizar a lista:", error);
        return {
        error: "Falha ao atualizar."
    };
    }

    revalidatePath(`/caderno/${cadernoId}`); 
    return { data: list };
};

export const createList = createSafeAction(CreateList, handler);