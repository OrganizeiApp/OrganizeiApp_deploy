"use client";

import { useScrolltop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export const Navbar = () => {
    const scrolled = useScrolltop();

    return(
        <div className={cn(
            "z-50 bg-[#6F73D2] fixed top-0 flex items-center justify-between w-full p-6"
        )}>
            <div className="flex flex-1 justify-start">
                <Logo />
            </div>
            <div className="flex justify-end flex-1">
                <LoginButton>
                    <Button variant="green">
                        Login
                    </Button> 
                </LoginButton>
            </div>
        </div>
    )
}
