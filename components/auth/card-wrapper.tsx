"use client";

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
 } from "@/components/ui/card";
import { HeaderLogin } from "@/components/auth/header-login";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import Link from "next/link";
import { Button } from "../ui/button";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({ 
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial    
}: CardWrapperProps) => {
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
             <HeaderLogin label={headerLabel} /> 
            {/* </CardHeader>
            <p className="text-sm font-bold flex flex-col pl-6">Lembre-se de que, para utilizar todas as funções, é necessário entrar com uma conta Google!</p>
            <CardHeader> */}
            {/* <div className="pt-4"/> */}
            {children}
            </CardHeader>
            {showSocial &&(
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter className="flex flex-col items-center">
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
                {/* Botão "Política de Privacidade" abaixo do BackButton */}
                <Link href="/privacy-policy">
                    <Button variant="ghostlist" className="capitalize font-sm">
                        Política de Privacidade
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};