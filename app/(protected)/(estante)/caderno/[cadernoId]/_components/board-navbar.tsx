import { auth } from "@/auth";
import { db } from "@/lib/db";
import { CadernoTitleForm } from "./board-title-form";
import { CadernoOptions } from "./board-options";
import { Caderno } from "@prisma/client";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";

interface CadernoNavBarProps {
    data: Caderno;
};

export const CadernoNavBar = async ({
    data
}: CadernoNavBarProps) => {

    if (!data) {
        throw new Error("data is undefined");
    }

    return (
        <div className="w-full h-14 z-[40]  bg-[#E5F3FF] border-[#B9DBFA] border-6 border-b-4 rounded-b-lg top-14 flex items-center justify-center px-6 gap-x-4 text-white">
            <div className="flex-shrink-0 lg:hidden">
            <MobileSidebar />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
            <CadernoTitleForm data={data} />
            </div>
            <div className="ml-auto flex-shrink-0">
                <CadernoOptions id={data.id} />
            </div>
        </div>
    );
};