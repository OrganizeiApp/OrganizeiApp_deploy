"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ElementRef, useRef } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from "@/components/ui/popover";

interface FormPopoverProps {
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
}

export const FormPopover = ({
    children,
    side = "top",
    align = "center",
    sideOffset = 0,
}: FormPopoverProps) => {
    const router = useRouter();
    const closeRef = useRef<ElementRef<"button">>(null);
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                className="w-80 pt-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6"
            >
                <div className="relative h-96 w-full mb-2"> {/* Adicionando margem inferior para espaçamento */}
                    <Image
                        src="/Hábitos.svg" // Verifique se este caminho está correto
                        alt="Template de Hábitos"
                        fill
                        className="object-contain"
                    />
                </div>
                <PopoverClose ref={closeRef} asChild>
                </PopoverClose>
                <a 
                    href="/Controle-de-Hábitos.pdf" // Caminho do arquivo na pasta public
                    download // Faz com que o arquivo seja baixado
                    className="bg-[#7935E8] text-white px-4 py-2 rounded flex items-center justify-center font-extrabold"
                >
                    Baixar Template
                </a>
            </PopoverContent>
        </Popover>
    );
};
