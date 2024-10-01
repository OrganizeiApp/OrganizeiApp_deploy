import { auth } from "@/auth";

import { db } from "@/lib/db";
import { MAX_FREE_ESTANTE } from "@/constants/estante";

export const incrementAvailableCount = async () => {
    const session = await auth();

    if (!session || !session.user?.id) {
        throw new Error("Sem autorização!");
    }

    const userId = session.user.id;

    const estanteLimit = await db.estanteLimit.findUnique({
        where: { userId }
    });

    if (estanteLimit) {
        await db.estanteLimit.update({
            where: { userId },
            data: { count: estanteLimit.count + 1}
        });
    } else {
        await db.estanteLimit.create({
            data: { userId, count: 1}
        });
    }
};

export const decreaseAvailableCount = async () => {
    const session = await auth();

    if (!session || !session.user?.id) {
        throw new Error("Sem autorização!");
    }

    const userId = session.user.id;

    const estanteLimit = await db.estanteLimit.findUnique({
        where: { userId }
    });

    if (estanteLimit) {
        await db.estanteLimit.update({
            where: { userId },
            data: { count: estanteLimit.count > 0 ? estanteLimit.count - 1 : 0}
        });
    } else {
        await db.estanteLimit.create({
            data: { userId, count: 1}
        });
    }
};

export const hasAvailableCount = async () => {
    const session = await auth();

    if (!session || !session.user?.id) {
        throw new Error("Sem autorização!");
    }

    const userId = session.user.id;

    const estanteLimit = await db.estanteLimit.findUnique({
        where: { userId }
    });

    if (!estanteLimit || estanteLimit.count < MAX_FREE_ESTANTE) {
        return true;
    } else {
        return false;
    }
};

export const getAvailableCount = async () => {
    const session = await auth();

    if (!session || !session.user?.id) {
        return 0;
    } 

    const userId = session.user.id;

    const estanteLimit = await db.estanteLimit.findUnique({
        where: { userId }
    });

    if (!estanteLimit) {
        return 0;
    }

    return estanteLimit.count;
};


