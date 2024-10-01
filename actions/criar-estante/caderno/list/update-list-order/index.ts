"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { UpdateListOrder } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { items, cadernoId } = data;
    let lists;

    try {
        const transaction = items.map((iList) => 
            db.iList.update({
            where: {
                id: iList.id,
                caderno: {
                    userId,
                },
            },
            data: {
                order: iList.order, //se der bo foi aqui (so tirar o i e deixar list.order)
            },
        })
    );

    lists = await db.$transaction(transaction);
    } catch (error) {
        return {
        error: "Falha ao reorganizar."
        }
    }

    revalidatePath(`/caderno/${cadernoId}`);
    return { data: lists };
};

export const updateListOrder = createSafeAction(UpdateListOrder, handler);