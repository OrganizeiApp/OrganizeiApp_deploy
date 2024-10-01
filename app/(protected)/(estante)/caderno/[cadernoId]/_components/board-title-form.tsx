"use client";

import { ElementRef, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Caderno } from "@prisma/client";
import { FormInput } from "@/components/form/form-input";
import { updateCaderno } from "@/actions/criar-estante/caderno/update-caderno";
import { UseAction } from "@/hooks/use-action";
import { toast } from "sonner";

interface CadernoTitleFormProps {
    data: Caderno;
};

export const CadernoTitleForm = ({
    data,
}: CadernoTitleFormProps) => {
    const { execute } = UseAction(updateCaderno, {
        onSuccess: (data) => {
            toast.success(`Caderno "${data.title}" atualizado!`);
            setTitle(data.title);
            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const formRef = useRef<ElementRef<"form">>(null);
    const inputRef = useRef<ElementRef<"input">>(null);

    const [title, setTitle] = useState(data.title);
    const [isEditing, setIsEditing] = useState(false);

    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.select();
        })
    };

    const disableEditing = () => {
        setIsEditing(false);
    };

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        console.log("enviado", title);
        
        execute({
            title,
            id: data.id,
        });
    };

    const onBlur = () => {
        formRef.current?.requestSubmit();
    };

    if (isEditing) {
        return (
            <form action={onSubmit} ref={formRef} className="flex items-center gap-x-2">
                <FormInput 
                ref={inputRef}
                id="title"
                onBlur={onBlur}
                defaultValue={title}
                className="text-lg font-extrabold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
                />
            </form>
        )
    }

    return(
        <Button
            onClick={enableEditing}
            className="font-extrabold text-lg h-auto w-auto p-1 px-2"
            variant="yellow"
        >
            {title}
        </Button>
    );
};