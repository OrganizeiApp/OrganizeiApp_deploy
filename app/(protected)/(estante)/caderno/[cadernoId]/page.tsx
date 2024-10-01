import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ListContainer } from "./_components/list-container";

interface CadernoIdPageProps {
    params: {
        cadernoId: string;
    };
};

const CadernoIdPage = async ({
    params,
}: CadernoIdPageProps) => {

    const session = await auth();

    if (!session || !session.user?.id) {
        redirect("/estante");
    };

    const userId = session.user.id;

    const lists = await db.iList.findMany({
        where: {
            cadernoId: params.cadernoId,
            caderno: {
                userId,
            },
        },
        include: {
            cards: {
                orderBy: {
                    order: "asc",
                },
            },
        },
        orderBy: {
            order: "asc",
        },
    });

    return (
        <div className="p-4 h-full overflow-x-auto">
            <ListContainer 
                cadernoId={params.cadernoId}
                data={lists}
            />
        </div>
    );
}

export default CadernoIdPage;