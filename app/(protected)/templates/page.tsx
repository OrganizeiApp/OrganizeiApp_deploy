import { FeedWrapper } from "@/components/feed-wrapper";
import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";
import { Infos } from "../inicio/_components/info";
import { BoardList } from "./board-list";
import Image from "next/image";


const rotina = async () => {
    return (
        <div className="w-full flex flex-col lg:flex-row-reverse gap-4 lg:gap-[48px]">
            <FeedWrapper>
                <div className="lg:hidden">
                    <MobileSidebar />
                </div>
                <div className='px-4 pt-4'>
                    <Infos />
                </div>
                <div className="lg:px-2 px-4">
                    <Info />
                </div>
                <Separator className="lg:hidden"/>
                <div className="lg:px-6 px-4">
                    <BoardList />
                </div>
            </FeedWrapper>
        </div>
    );
}

export default rotina;
