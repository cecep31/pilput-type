import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import { postsStore } from "@/stores/postStore";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getProfilePicture } from "@/utils/getImage";
import Days from "dayjs";

export default function Index() {
  const poststore = postsStore();

  useEffect(() => {
    poststore.fetch();
  }, []);
  return (
    <div className="px-5 bg-white shadow-md py-4">
      <div className="text-xl font-semibold my-3">Posts</div>
      <div>
        <Link to={"/posts/create"}>
          <Button variant="secondary" className="border">
            Add new post
          </Button>
        </Link>
      </div>
      <Table>
        <TableCaption>A list of your Posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Author</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {poststore.posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage
                      src={getProfilePicture(post.creator?.image)}
                      width={5}
                      height={5}
                      alt="Avatar"
                    ></AvatarImage>
                    <AvatarFallback>
                      {post.creator?.first_name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="font-semibold">
                    {post.creator?.first_name} {post.creator?.last_name}
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-semibold">
                <div className="max-w-96 overflow-auto">{post.title}</div>
              </TableCell>
              <TableCell>
                {post.body.replace(/<.*?>/g, "").length > 5
                  ? post.body.replace(/<.*?>/g, "").substring(0, 70) + "..."
                  : post.body.replace(/<.*?>/g, "")}
              </TableCell>

              <TableCell>
                {Days(post.created_at).format("DD MMM YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>
              {poststore.posts.length} / {poststore.total}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
