import { FeedWrapper } from "@/components/feed-wrapper";
import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { SelectList } from "./_components/board-list";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";
import { Infos } from "../inicio/_components/info";
import { ResumoList } from "./_components/resumo-list";

const estante = async () => {
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
                    {/* <SelectList /> */}
                    <ResumoList />
                </div>
            </FeedWrapper>
        </div>
    );
}

export default estante;