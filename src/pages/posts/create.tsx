// import { useEditor } from "@tiptap/react";
import { useCurrentEditor } from "@tiptap/react";
import Editor from "../../components/post/Editor";
import { Input } from "@/components/ui/input";

function PostCreate() {
  const {editor} = useCurrentEditor();
  // const editor = useEditor();
  // console.log(editor?.getHTML());
 console.log(editor?.getHTML());
  
  return (
    <div>
      <Input placeholder="Title" />
      <div className="mt-5 porse">
        <Editor />
      </div>
    </div>
  );
}

export default PostCreate;
