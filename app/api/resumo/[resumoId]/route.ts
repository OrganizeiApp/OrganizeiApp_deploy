import { db } from "@/lib/db";
import { NextResponse } from "next/server";

type Params = {params: { resumoId: string}};

export async function PATCH(request: Request, { params }: Params) {
    try {
        const { resumoId } = params;
        const { title, content } = await request.json();
        const resumo = await db.resumo.update({
            where: {id: resumoId},
            data: {title, content},
        });
        return NextResponse.json(resumo, { status: 200 });
    } catch (error) {
        console.error("request error", error);
        NextResponse.json({ error: "erro ao atualizar o resumo"}, {status: 500});
    }
}