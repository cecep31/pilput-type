import { useCurrentEditor } from "@tiptap/react";
import { Bold, Italic,Quote } from "lucide-react";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <div className="flex space-x-1 rounded-t-lg border-2 bg-slate-500 py-4">
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={`${
          editor?.isActive("bold") ? "bg-slate-600 text-white" : ""
        } p-1`}
      >
        <Bold />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        className={`${
          editor?.isActive("bold") ? "bg-slate-600 text-white" : ""
        } p-1`}
      >
        <Quote />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        className={`${
          editor?.isActive("codeBlock") ? "bg-slate-600 text-white" : ""
        } p-1`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={editor?.isActive("italic") ? "font-bold" : ""}
      >
        <Italic />
      </button>
    </div>
  );
};

export default MenuBar;
