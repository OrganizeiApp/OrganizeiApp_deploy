import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]    
});

export const Logo = () => {
    return (
        <div className="flex items-center gap-x-2">
            <Image 
            src="/LogNav.svg"
            height="40"
            width="40"
            alt="Logo"
            />
            <p className={cn("font-semibold text-white",font.className)}>
                Organizei
            </p>
        </div>
    )
}