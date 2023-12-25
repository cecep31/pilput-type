// import { useEditor } from "@tiptap/react";
import { useCurrentEditor } from "@tiptap/react";
import Editor from "../../components/post/Editor";

function PostCreate() {
  const { editor } = useCurrentEditor();
  // const editor = useEditor();
  // console.log(editor?.getHTML());
  console.log(editor?.getHTML());

  return (
    <div className="max-w-3xl bg-white mx-auto px-5 py-5">
      <div className="text-2xl mx-auto my-7 font-bold">
        <input
          className="w-full text-3xl py-3 font-bold text-black bg-transparent border-none"
          value="Title"
        />
      </div>
      <div className="mt-5 porse">
        <Editor />
      </div>
      
    </div>
  );
}

export default PostCreate;
