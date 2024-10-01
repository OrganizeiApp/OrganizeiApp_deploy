"use client";

import { useState, useRef, ElementRef } from "react";
import { IList } from "@prisma/client";
import { useEventListener } from "usehooks-ts";
import { FormInput } from "@/components/form/form-input";
import { UseAction } from "@/hooks/use-action";
import { updateList } from "@/actions/criar-estante/caderno/list/update-list";
import { toast } from "sonner";
import { ListOptions } from "./list-options";

interface ListHeaderProps {
    data: IList;
    onAddCard: () => void;
};

export const ListHeader = ({
    data,
    onAddCard,
}: ListHeaderProps) => {
    const [title, setTitle] = useState(data.title);
    const [isEditing, setIsEditing] = useState(false);

    const formRef = useRef<ElementRef<"form">>(null);
    const inputRef = useRef<ElementRef<"input">>(null);

    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.select();
        });
    };

    const disableEditing = () => {
        setIsEditing(false);
    };

    const { execute } = UseAction(updateList, {
        onSuccess: (data) => {
            toast.success(`Renomeado para "${data.title}"`);
            setTitle(data.title);
            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const handleSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;  // FAZER PARA VARIAVEIS EXTRAIDAS
        const id = formData.get("id") as string;
        const cadernoId = formData.get("cadernoId") as string;

        if (title === data.title) {
            return disableEditing();
        }

        execute({
            title,
            id,
            cadernoId,
        });
    }

    const onBlur = () => {
        formRef.current?.requestSubmit();
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            formRef.current?.requestSubmit();
        }
    };

    useEventListener("keydown", onKeyDown);

    return (
        <div className="pt-2 px-2 text-sm font-extrabold flex justify-between items-start gap-x-2">
            {isEditing ? (
                <form 
                ref={formRef}
                action={handleSubmit}
                className="flex-1 px-[2px]"
                >
                    <input hidden id="id" name="id" value={data.id} />
                    <input hidden id="cadernoId" name="cadernoId" value={data.cadernoId} />
                    <FormInput 
                        ref={inputRef}
                        onBlur={onBlur}
                        id="title"
                        placeholder="Digite o título do item..."
                        defaultValue={title}
                        className="text-sm px-[7px] py-1 h-7 font-extrabold border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus-bg-white"
                    />
                    <button type="submit" hidden />
                </form>
            ) : (
            <div 
            onClick={enableEditing}
            className="w-full text-sm px-2.5 py-1 h-7 font-extrabold border-transparent">
                {title}
            </div>
            )}
            <ListOptions
            onAddCard={onAddCard}
            data={data}
            />
        </div>
    );
};