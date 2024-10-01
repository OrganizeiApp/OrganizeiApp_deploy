"use client";

import { Resumo } from '@prisma/client';
import React, { useState } from 'react'
import { useEditor, EditorContent, Editor } from "@tiptap/react"
import { StarterKit } from "@tiptap/starter-kit"
import EditorMenuBar from './EditorMenuBar';
import Edit from './Edit';
import Article from './Article';

type Props = {
    resumo: Resumo
};

const Content = ({ resumo }: Props) => {

  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(resumo.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(resumo.content ?? "");
  const [contentError, setContentError] = useState<string>("");
  const [tempContent, setTempContent] = useState<string>(content);

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  }

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  }

  const handleOnChangeContent = ({ editor } : any) => {
    if(!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML())
  }

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
        attributes: {
            class:
            "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full"
        },
    },
    content: content,
    editable: isEditable,
  });
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") setTitleError("Esse campo é necessário.")
    if (editor?.isEmpty) setContentError("Esse campo é necessário.")
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
        `/api/resumo/${resumo?.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: content,
            }),
        }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <div className='prose w-full max-w-full mb-10'>
    {/* EDITAR */}
        <Edit 
            isEditable={isEditable}
            handleIsEditable={handleIsEditable}
            title={title}
            setTitle={setTitle}
            tempTitle={tempTitle}
            setTempTitle={setTempTitle}
            tempContent={tempContent}
            setTempContent={setTempContent}
            editor={editor}
            resumo={resumo}
        />

        <form onSubmit={handleSubmit}>
        <>
            {isEditable ? (
                <div>
                    <textarea 
                        className='border-2 rounded-md bg-wh-50 p-3 w-full'
                        placeholder='Title'
                        onChange={handleOnChangeTitle}
                        value={title}
                    />
                </div>
            ) : (
              <h3 className='font-extrabold text-3xl mt-3'>{title}</h3>  
            )}
        </>
        
        {/* ARTICLE */}
        <Article 
            contentError={contentError}
            editor={editor}
            isEditable={isEditable}
            setContent={setContent}
            title={title}
        />

        {/* Submit button */}
        {isEditable && (
            <div className='flex justify-end'>
                <button
                type="submit"
                className='bg-[#7935E8] hover:bg-[#EFE5FF] text-[#F8F7FF] font-bold py-2 px-5 mt-5 rounded-md'
                >
                SALVAR 
                </button>
            </div>
        )}
        </form>
    </div>
  )
}

export default Content