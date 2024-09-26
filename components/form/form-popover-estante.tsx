"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from "@/components/ui/popover";
import { UseAction } from "@/hooks/use-action";
import { createCaderno } from "@/actions/criar-estante/caderno/create-caderno";
import { createResumo } from "@/actions/criar-estante/resumo/create-resumo";
import { FormInput } from "./form-input-estante";  
import { FormSubmit } from "./form-submit"; //não precisa trocar (conferir - se funcionar não precisa)
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FormPopoverProps {
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
}

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}: FormPopoverProps) => {
    const router = useRouter();
    const closeRef = useRef<ElementRef<"button">>(null);

    const items: { value: string, label: string }[] = [
        { value: 'caderno', label: 'Caderno' },
        { value: 'resumo', label: 'Resumo' },
    ];

    const [value, setValue] = useState<string | null>(null);

    console.log({ value });

    // UseAction agora sempre é chamado independentemente da seleção.
    const cadernoAction = UseAction(createCaderno, {
        onSuccess: (data) => {
            toast.success("Caderno criado!");
            closeRef.current?.click();
            router.push(`/caderno/${data.id}`);
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const resumoAction = UseAction(createResumo, {
        onSuccess: (data) => {
            toast.success("Resumo criado!");
            closeRef.current?.click();
            router.push(`/resumo/${data.id}`);
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;

        if (value === 'caderno') {
            cadernoAction.execute({ title });
        } else if (value === 'resumo') {
            resumoAction.execute({ title });
        }
    };

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
                    Criar novo item
                </div>
                <>
                    {items.map((item) => (
                        <div key={item.value}>
                            <input
                                name="opt"
                                type="radio"
                                value={item.value}
                                id={item.value}
                                checked={value === item.value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label
                                className="font-extrabold text-sm text-[#463F3A]"
                                htmlFor={item.value}
                            >
                                {item.label}
                            </label>
                        </div>
                    ))}
                </>
                <PopoverClose ref={closeRef} asChild>
                    <Button 
                        className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
                        variant="ghost"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <form onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); }} className="space-y-4">
                    <div className="space-y-4">
                        <FormInput
                            id="title"
                            label="Título"
                            type="text"
                            errors={value === 'caderno' ? cadernoAction.fieldErrors : resumoAction.fieldErrors}
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