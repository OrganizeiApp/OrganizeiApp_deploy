"use client";

import { toast } from "sonner";
import { FormInput } from "@/components/form/form-input";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Layout } from "lucide-react";
import { useParams } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { UseAction } from "@/hooks/use-action";
import { updateCard } from "@/actions/update-card";

interface HeaderProps {
    data: CardWithList;

}


export const Header = ({
    data,
}: HeaderProps) => { 
    const queryClient = useQueryClient();
    const params = useParams();

    const { execute } = UseAction(updateCard, {
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["card", data.id]
            });

            toast.success(`Renomeado para "${data.title}"`);
            setTitle(data.title);
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const inputRef = useRef<ElementRef<"input">>(null);

    const [title, setTitle] = useState(data.title);

    const onBlur = () => {
        inputRef.current?.form?.requestSubmit();
    }

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        const boardId = params.boardId as string;

        if (title === data.title) {
            return;
        }

        execute({
            title,
            boardId,
            id: data.id,
        })
    }

    return (
        <div className="flex items-start gap-x-3 mb-6 w-full bg-[#E5F3FF]">
            <Layout className="h-5 w-5 mt-1 text-[#8DC3F5] bg-[#E5F3FF]"/>
            <div className="w-full">
                <form action={onSubmit}>
                    <FormInput 
                        ref={inputRef}
                        onBlur={onBlur}
                        id="title"
                        defaultValue={title} 
                        className="font-extrabold text-xl px-1 text-[#8DC3F5] bg-[#E5F3FF] border-transparent relative -left-1.5 w-[95%] focus-visible:bg-[#E5F3FF] focus-visible:border-input mb-0.5 truncate"
                    />
                </form>
                <p className="text-sm font-bold text-[#8DC3F5]">
                    em lista <span className="underline">{data.list.title}</span>
                </p>
            </div>
        </div>
    );
};

Header.Skeleton = function HeaderSkeleton(){
    return (
        <div className="flex items-start gap-x-3 mb-6">
            <Skeleton className="h-6 w-6 mt-1 bg-[#8DC3F5]"/>
            <div>
                <Skeleton className="w-24 h-6 mb-1 bg-[#8DC3F5]"/>
                <Skeleton className="w-12 h-4 bg-[#8DC3F5]"/>
            </div>
        </div>
    );
};