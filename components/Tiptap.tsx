'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>01234567 89LYvWPF<br/> 8+8=10=wnti=4*4<br/>it is tiptap editor</p>',
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
