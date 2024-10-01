import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Resumo } from '@prisma/client';
import Content from "./_components/Content";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";


interface ResumoIdPageProps {
    params: {
        resumoId: string; // ID do resumo que queremos buscar
    };
};

const Resumos = async ({ params }: ResumoIdPageProps) => {
    const session = await auth();

    // Redireciona se não estiver autenticado
    if (!session || !session.user?.id) {
        redirect("/estante");
    }

    const userId = session.user.id;

    // Busca o resumo do banco de dados
    const resumo: Resumo | null = await db.resumo.findUnique({
        where: {
            id: params.resumoId,
        },
        // Inclua outros campos que você precisa, se necessário
    });

    // Se não encontrar o resumo, você pode redirecionar ou exibir uma mensagem
    if (!resumo || resumo.userId !== userId) {
        redirect("/rotina");
    }

    

    return (
        <div>
            <div className="lg:hidden">
                <MobileSidebar />
            </div>
            <div className='lg:py-14 py-4'>
                <div className='flex items-center justify-center px-2 md:px-6'>
                    <Content resumo={resumo} />
                </div>
            </div>
        </div>
    );
}

export default Resumos;
