import "@/titptap.scss";
// src/Tiptap.jsx
import { BubbleMenu, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Buble from "./Bubble";

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
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <EditorProvider editable={true}
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
      >
        {/* <FloatingMenu><MenuBar/></FloatingMenu> */}
        <BubbleMenu>
          <Buble />
        </BubbleMenu>
      </EditorProvider>
    </div>
  );
};

export default Tiptap;
