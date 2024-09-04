import { FeedWrapperInicio } from "@/components/feed-wrapper-inicio";
import { Separator } from "@/components/ui/separator";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";
import { Infos } from "./_components/info";
import { FetchCalendarEvents } from "@/components/calendar-component";
import { Feedback } from "./_components/querajudar";
import Avisos from "./_components/aviso";


const calendario = async () => {
    return (
        <div className="w-full flex flex-col lg:flex-row-reverse gap-4 lg:gap-[48px]">
            <FeedWrapperInicio>
            <div className="lg:hidden">
            <MobileSidebar />
            </div>
            <div className='px-4 pt-4'>
            <Infos />
            <Separator className="hidden"/>
            <div className="font-extrabold text-3xl text-[#7935E8] pt-6">
            Aqui estão os seus lembretes:
            </div>
            <div className="px-2 md:px-4 pt-6">
            </div>
            <Avisos />
            <div className="px-2 md:px-4 pt-6"></div>
            <FetchCalendarEvents />
            </div>
            <div className="justify-end">
            </div>
            </FeedWrapperInicio>
        </div>
    );
}

export default calendario;