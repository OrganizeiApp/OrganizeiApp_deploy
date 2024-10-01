import './styles.scss'

import React from 'react'
import { Editor } from "@tiptap/react"
import ListItem from '@tiptap/extension-list-item'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, Bars2Icon, BarsArrowDownIcon, BoldIcon, ChatBubbleBottomCenterTextIcon, CodeBracketIcon, CodeBracketSquareIcon, H1Icon, H2Icon, H3Icon, ItalicIcon, ListBulletIcon, NumberedListIcon, StrikethroughIcon } from '@heroicons/react/24/solid'

type Props = {
    editor: Editor | null;
}

const EditorMenuBar = ({ editor }: Props) => {
    if (!editor) {
      return null
    }
  
    return (
      <div className="control-group">
        <div className="button-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={editor.isActive('bold') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <BoldIcon 
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive('italic') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <ItalicIcon 
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive('strike') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <StrikethroughIcon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            className={editor.isActive('code') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <CodeBracketIcon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <Bars2Icon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) 
            ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
            : 'p-1'}
          >
            <H1Icon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <H2Icon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <H3Icon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <ListBulletIcon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <NumberedListIcon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <CodeBracketSquareIcon
            className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') 
                ? 'bg-[#F8F7FF] p-1 rounded-md border-2 border-[#7935E8] font-bold text-[#7935E8]' 
                : 'p-1'}
          >
            <ChatBubbleBottomCenterTextIcon
            className='w-5 h-5'
            />
          </button>
          <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <BarsArrowDownIcon
                className='w-5 h-5'
            />
          </button>
          <button
            type="button"
            className='font-bold text-[#7935E8] p-1'
            onClick={() => editor.chain().focus().undo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
          >
            <ArrowUturnLeftIcon className='w-5 h-5'/>
          </button>
          <button
            type="button"
            className='font-bold text-[#7935E8] p-1'
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
          >
            <ArrowUturnRightIcon className='w-5 h-5'/>
          </button>
        </div>
      </div>
    )
  }

export default EditorMenuBar