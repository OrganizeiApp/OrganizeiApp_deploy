"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useRef } from "react";
import { toast } from "sonner";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from "@/components/ui/popover"
import { UseAction } from "@/hooks/use-action";
import { createResumo } from "@/actions/criar-estante/resumo/create-resumo";
import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FormPopoverProps {
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
};

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}: FormPopoverProps) => {
    const router = useRouter();
    const closeRef = useRef<ElementRef<"button">>(null);

    const { execute, fieldErrors } = UseAction(createResumo, {
        onSuccess: (data) => {
            toast.success("Resumo criado!");
            closeRef.current?.click();
            router.push(`/resumo/${data.id}`)
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;

        execute({ title });
    }
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                align={align}
                className="w-80 pt-3"
                side={side}
                sideOffset={sideOffset}
            >
               <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Criar Resumo
                </div> 
                <PopoverClose ref={closeRef} asChild>
                    <Button 
                    className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
                    variant="ghost"
                    >
                    <X className="h-4 w-4"/>
                    </Button>
                </PopoverClose>
                <form action={onSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <FormInput
                        id="title"
                        label="Título do Resumo"
                        type="text"
                        errors={fieldErrors}
                        
                        />
                    </div>
                    <FormSubmit className="w-full" variant="blue">
                        Criar
                    </FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    );
};

