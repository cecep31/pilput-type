import { useCurrentEditor } from "@tiptap/react";
import { Bold, Italic } from "lucide-react";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <div className="flex space-x-1 mb-3 border-2 bg-white">
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={`${editor?.isActive("bold") ? "bg-slate-600 text-white" : ""} p-1`}
      >
        <Bold />
      </button>
      <button
        onClick={() => editor?.commands.toggleBlockquote()}
        className={`${editor?.isActive("bold") ? "bg-slate-600 text-white" : ""} p-1`}
      >
        blockquote
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
