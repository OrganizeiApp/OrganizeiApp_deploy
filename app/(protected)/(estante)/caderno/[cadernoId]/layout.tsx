import { auth } from "@/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { CadernoNavBar } from "./_components/board-navbar";
import { CadernoNavBarMobile } from "./_components/board-navbar-mobile";

export async function generateMetadata({
    params
}:{
    params: { cadernoId: string; };
}) {
    const session = await auth();

    if (!session || !session.user?.id) {
        return{
            title: "Quadro!",
        };
    }

    const userId = session.user.id;

    const caderno = await db.caderno.findUnique({
        where: {
            id: params.cadernoId,
            userId
        }
    });

    return {
        title: caderno?.title || "Quadro",
    }

}

const CadernoIdLayout = async ({ 
    children,
    params,
}: {
    children: React.ReactNode;
    params: { cadernoId: string; }; //nome da pasta
}) => {

    const session = await auth();

    if (!session || !session.user?.id) {
        return{
            title: "Quadro!",
        }
    };

    const userId = session.user.id;

    const caderno = await db.caderno.findUnique({
        where: {
            id: params.cadernoId,
            userId,
           },
    });

    if (!caderno) {
        notFound();
    }

    return (
        <div className="relative h-full bg-no-repeat bg-cover bg-center bg-white border-slate-200 border-b-4 rounded-lg lg:overflow-auto">
            <main className="h-full">
            <CadernoNavBarMobile data={caderno} />
            <div className="hidden lg:block">
            <CadernoNavBar data={caderno} />
            </div>
            {children}
            </main>
        </div>
    );
};

export default CadernoIdLayout;