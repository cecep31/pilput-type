import {Link} from "react-router-dom";
import ButtonPrimary from '../buttons/buttonprimary'

interface Post {
  id: string;
  title: string;
  desc: string;
}
interface PostlistProps {
  post: Post;
}

const Postlist: React.FC<PostlistProps> = ({post}) => {
  return (
    <div className="w-full mt-4 px-5 py-5 bg-gray-50 border text-gray-600 shadow-md rounded-lg">
      <div className="">
        <h2 className="font-bold capitalize">{post.title}</h2>
        <p>{post.desc}</p>
        <div className="flex justify-end">
          <Link to={"/posts/"+post.id} className="btn">
            <ButtonPrimary title="Read More"></ButtonPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Postlist;
