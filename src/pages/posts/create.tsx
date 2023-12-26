// import { useEditor } from "@tiptap/react";
import { useCurrentEditor } from "@tiptap/react";
import MyEditor from "../../components/post/Editor";
import { postsStore } from "@/stores/createPostStore";



function PostCreate() {
  const { editor } = useCurrentEditor();
  // const editor = useEditor();
  // console.log(editor?.getHTML());
  console.log(editor?.getHTML());
  const { post, updatetitle, updatebody } = postsStore();

  const update = (data: string) => {
    updatebody(data);
  };

  return (
    <div className="max-w-3xl bg-white mx-auto px-5 py-5">
      <div className="text-2xl mx-auto my-7 font-bold">
        <input
          onChange={(e) => updatetitle(e.target.value)}
          className="w-full text-4xl py-3 font-bold text-black bg-transparent border-none focus:outline-none"
          value={post.title}
          placeholder="Input title..."
        />
      </div>
      <div className="mt-5">
        <MyEditor content={post.body} onchange={update} />
      </div>
    </div>
  );
}

export default PostCreate;
