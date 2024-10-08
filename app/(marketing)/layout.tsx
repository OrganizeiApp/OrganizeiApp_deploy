import { Navbar } from "./_components/navbar";


const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-[#6F73D2]">
            <Navbar />
            <main className="h-full pt-0 lg:pt-40">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout;