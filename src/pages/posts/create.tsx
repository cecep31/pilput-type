// import { useEditor } from "@tiptap/react";
import { useCurrentEditor } from "@tiptap/react";
import MyEditor from "../../components/post/Editor";
import { postsStore } from "@/stores/createPostStore";
import { axiosIntence } from "@/utils/fetch";
import { getToken } from "@/utils/Auth";



function PostCreate() {
  const { editor } = useCurrentEditor();
  const token = getToken();
  // const editor = useEditor();
  // console.log(editor?.getHTML());
  console.log(editor?.getHTML());
  const { post, updatetitle, updatebody,updatePhoto_url } = postsStore();

  const update = (data: string) => {
    updatebody(data);
  };

  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append('image', file);

        // Adjust the URL for your file upload endpoint
        const response = await axiosIntence.post('/api/v2/posts/image', formData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Assuming your server responds with the uploaded file URL
        const photoUrl = response.data.photo_url;

        // Update the post's photo URL
        // You might need to modify your store method based on your implementation
        // For example, if you have an updatePhoto method, use it accordingly
        console.log(photoUrl);
        updatePhoto_url(photoUrl)
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }
  return (
    <div className="max-w-3xl bg-white mx-auto px-5 py-5">
      <div>
        <img src={post.photo_url} alt="" />
      </div>
      <input type="file" onChange={uploadPhoto} />
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
