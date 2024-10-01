import React from 'react'
import { Editor } from '@tiptap/react'
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Resumo } from '@prisma/client';

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

  return (
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
            </div>
        )
  }

export default Edit