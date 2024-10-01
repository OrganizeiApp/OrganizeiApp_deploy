"use client";

import { Button } from "@/components/ui/button";

import { deleteCaderno } from "@/actions/criar-estante/caderno/delete-caderno";
import { UseAction } from "@/hooks/use-action";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { MoreHorizontal, X } from "lucide-react";
import { toast } from "sonner";

interface CadernoOptionsProps {
    id: string;
};

export const CadernoOptions = ({ id }: CadernoOptionsProps) => {

    const { execute, isLoading } = UseAction(deleteCaderno, {
        onError: (error) => {
            toast.error(error);
        }
    });

    const onDelete = () => {
        execute({ id });
    };

    return (
                <Button
                    variant="red"
                    onClick={onDelete}
                    disabled={isLoading}
                    className="w-full h-auto p-2 px-5 justify-center font-extrabold text-sm"
                >
                    Deletar
                </Button>
    );
};