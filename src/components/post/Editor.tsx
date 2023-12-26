import "@/titptap.scss";
// src/Tiptap.jsx
import { BubbleMenu, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Buble from "./Bubble";

// define your extension array
const extensions = [StarterKit];

const Tiptap = ({
  content,
  onchange,
}: {
  content: string;
  onchange: (data: string) => void;
}) => {
  return (
    <div className="border prose md:prose-2xl">
      <EditorProvider
        // onUpdate={(editor) => {setbody(editor.editor.getHTML() || "")}}
        // onUpdate={onchange}
        onUpdate={(props) => {
          onchange(props.editor.getHTML());
        }}
        editable={true}
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
      >
        <BubbleMenu>
          <Buble />
        </BubbleMenu>
      </EditorProvider>
      {/* <div>
        <div className="my-10 mx-auto flex justify-center ">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        </div>
      </div> */}
    </div>
  );
};

export default Tiptap;
