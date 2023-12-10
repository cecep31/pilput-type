import "@/titptap.scss";
// src/Tiptap.jsx
import { BubbleMenu, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Buble from "./Bubble";
import { useState } from "react";


// define your extension array
const extensions = [StarterKit];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const Tiptap = () => {
  const [body, setbody] = useState("")
  return (
    <div className="border">
      <EditorProvider
        onUpdate={(editor) => {setbody(editor.editor.getHTML() || "")}}
        editable={true}
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
      >
        {/* <FloatingMenu>
         wkwk
        </FloatingMenu> */}
        <BubbleMenu>
          <Buble />
        </BubbleMenu>
      </EditorProvider>
      <div>
      <div className="my-10 mx-auto flex justify-center ">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Tiptap;
