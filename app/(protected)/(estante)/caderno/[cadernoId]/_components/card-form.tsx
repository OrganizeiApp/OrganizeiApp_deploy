"use client";

import { toast } from "sonner";
import { FormSubmit } from "@/components/form/form-submit";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { UseAction } from "@/hooks/use-action";
import { createCard } from "@/actions/criar-estante/caderno/card/create-card";
import { forwardRef, useRef, ElementRef, KeyboardEventHandler } from "react";
import { useParams } from "next/navigation";
import { useOnClickOutside, useEventListener } from "usehooks-ts";

interface CardFormProps {
    listId: string;
    enableEditing: () => void;
    disableEditing: () => void;
    isEditing: boolean;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
    listId,
    enableEditing,
    disableEditing,
    isEditing,
}, ref) => {

    const params = useParams();
    const formRef = useRef<ElementRef<"form">>(null);

    const { execute, fieldErrors } = UseAction(createCard, {
        onSuccess: (data) => {
            toast.success(`Item "${data.title}" criado`);
            formRef.current?.reset();
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            disableEditing();
        }
    };

    useOnClickOutside(formRef, disableEditing);
    useEventListener("keydown", onKeyDown);

    const onTextareakeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
           e.preventDefault();
           formRef.current?.requestSubmit(); 
        }
    };

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        const listId = formData.get("listId") as string;
        const cadernoId = params.cadernoId as string;

        execute({ title, listId, cadernoId });
    };

    if (isEditing) {
        return (
            <form
                ref={formRef}
                action={onSubmit}
                className="m-1 py-0.5 px-1 space-y-4"
            >
                <FormTextarea 
                    id="title"
                    onKeyDown={onTextareakeyDown}
                    ref={ref}
                    placeholder="Digite um título para esse item..."
                    errors={fieldErrors}
                />
                <input 
                    hidden
                    id="listId"
                    name="listId"
                    value={listId}
                />
                <div className="flex items-center gap-x-1">
                    <FormSubmit
                        variant="yellow"
                    >
                        Adicionar item
                    </FormSubmit>
                    <Button onClick={disableEditing} size="sm" variant="ghostlist">
                      <X className="h-5 w-5"/>  
                    </Button>
                </div>
            </form>
        )
    }

    return (
        <div className="pt-2 px-2">
            <Button
                onClick={enableEditing}
                className="h-auto px-2 py-1.5 w-full justify-start text-[#8DC3F5] text-sm"
                size="sm"
                variant="ghostlist"
            >
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Item
            </Button>
        </div>
    );
});

CardForm.displayName = "CardForm";