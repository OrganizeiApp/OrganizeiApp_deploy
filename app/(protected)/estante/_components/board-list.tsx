import { db } from "@/lib/db";
import { FormPopover } from "@/components/form/form-popover-estante";
import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getAvailableCount } from "@/lib/estante-limit";
import { MAX_FREE_ESTANTE } from "@/constants/estante";
import { Ellipsis } from 'lucide-react';

export const SelectList = async () => {

    const session = await auth();

    if (!session || !session.user?.id) {
        return ("/");
    }

    const userId = session.user.id;

    const resumos = await db.resumo.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    const cadernos = await db.caderno.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    const AvailableCount = await getAvailableCount();

    return (
        <div className="space-y-4">
            <div className="flex items-center font-semibold text-lg text-neutral-700">
            </div>
            <div className="grid grid-cols-2 sm:grid-cols3 lg:grid-cols-4 gap-4">
                {resumos.map((resumo) => (
                    <Link
                    key={resumo.id}
                    href={`/resumo/${resumo.id}`}
                    className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-[#FFF6E5] border-2 border-[#F5CF8D] rounded-sm h-full w-full p-2 overflow-hidden"
                    >
                        <div />
                        <p className="relative font-extrabold text-[#F5CF8D]">
                            {resumo.title}
                        </p>
                    </Link>
                ))}
                {cadernos.map((caderno) => (
                    <Link
                    key={caderno.id}
                    href={`/caderno/${caderno.id}`}
                    className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-[#FFE5E7] border-2 border-[#F58A90] rounded-sm h-full w-full p-2 overflow-hidden"
                    >
                        <div />
                        <p className="relative font-extrabold text-[#F58A90]">
                            {caderno.title}
                        </p>
                    </Link>
                ))}
                <FormPopover sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-muted rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm">Criar novo Caderno / Resumo</p>
                <span className="text-xs">
                    {`${MAX_FREE_ESTANTE - AvailableCount} restantes`} 
                </span>
                <Hint
                    sideOffset={40}
                    description={`
                        Na fase de testes, são liberados somente 10 espaços para sua estante.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px]"
                    />
                </Hint>
                </div>
                </FormPopover>
            </div>
        </div>
    );
};
