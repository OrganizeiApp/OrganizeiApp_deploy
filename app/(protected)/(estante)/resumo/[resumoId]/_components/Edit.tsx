import React from 'react'
import { Editor } from '@tiptap/react'
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Resumo } from '@prisma/client';
import { UseAction } from '@/hooks/use-action';
import { deleteResumo } from '@/actions/criar-estante/resumo/delete-resumo';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';

type Props = {
    isEditable: boolean;
    handleIsEditable: (isEditable: boolean) => void;
    title: string;
    setTitle: (title: string) => void;
    tempTitle: string;
    setTempTitle: (tempTitle: string) => void;
    tempContent: string;
    setTempContent: (tempContent: string) => void;
    editor: Editor | null;
    resumo: Resumo;
}

const Edit = ({
    isEditable,
    handleIsEditable,
    title,
    setTitle,
    tempTitle,
    setTempTitle,
    tempContent,
    setTempContent,
    editor,
    resumo,
}: Props) => {

  const handleEnableEdit = () => {
        handleIsEditable(!isEditable);
        setTempTitle(title);
        setTempContent(editor?.getHTML() || "")
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle)
    editor?.commands.setContent(tempContent);
  };

  const { execute, isLoading } = UseAction(deleteResumo, {
    onError: (error) => {
        toast.error(error);
    }
});

    const onDelete = () => {
        execute({ id: resumo.id });
    };

  return (
        <div>
            <div className="flex justify-between items-center">
                <div className='mt-4'>
                    {isEditable ? (
                        <div className='flex justify-between gap-3'>
                            <button onClick={handleCancelEdit}>
                                <XMarkIcon className='h-6 w-6 text-[#7935E8]'/>
                            </button>
                        </div>
                    ) : (
                        <button onClick={handleEnableEdit}>
                                <PencilSquareIcon className='h-6 w-6 text-[#7935E8]'/>
                        </button>
                    )}
                </div>
                <div className='mt-4'>
                    <Button
                    variant="purple"
                    onClick={onDelete}
                    >
                        Deletar
                    </Button>
                </div>
            </div>
        </div>
        )
  }

export default Edit