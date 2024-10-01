"use server";

import { auth } from "@/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { UpdateList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return {
            error: "Sem autorização",
        };
    }

    const userId = session.user.id;

    const { title, id, cadernoId } = data;  //todas variaveis necessarias para extrair
    let list; //atualizando a lista

    try {
        list = await db.iList.update({
            where: {
                id,
                cadernoId,
                caderno: { //board tem userId
                    userId,
                },
            },
            data: {
                title, //se precisa passar mais que titulo
            },
        });
    } catch (error) {
        return {
            error: "Falha ao atualizar."
        }
    }

    revalidatePath('/caderno/${cadernoId}');
    return { data: list }; //retornar lista
};

export const updateList = createSafeAction(UpdateList, handler);