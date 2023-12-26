import { useCurrentEditor } from "@tiptap/react";
import { Bold, Italic,List,ListOrdered,Quote } from "lucide-react";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <div className="flex space-x-1 border-2 bg-gray-100 py-4">
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={`${
          editor?.isActive("bold") ? "bg-blue-200 text-white" : ""
        } p-2 hover:bg-blue-200 rounded-lg`}
      >
        <Bold />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={`${
          editor?.isActive("bulletList") ? "bg-blue-200 text-white" : ""
        } p-2 hover:bg-blue-200 rounded-lg`}
      >
        <List />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={`${
          editor?.isActive("orderedList") ? "bg-blue-200 text-white" : ""
        } p-2 hover:bg-blue-200 rounded-lg`}
      >
        <ListOrdered />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        className={`${
          editor?.isActive("bold") ? "bg-slate-600 text-white" : ""
        } p-2 hover:bg-blue-200 rounded-lg`}
      >
        <Quote />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        className={`${
          editor?.isActive("codeBlock") ? "bg-slate-600 text-white" : ""
        } p-2 hover:bg-blue-200 rounded-lg`}
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
            strokeLinecap="round"
            strokeLinejoin="round"
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
