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



export default function Index() {
  const poststore = postsStore();

  useEffect(() => {
    poststore.fetch();
  }, []);
  return (
    <div className="px-5 py-4">
      <div className="text-xl font-semibold my-3">Posts</div>
      <div>
        <Button variant="secondary" className="border">
          Add new post
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your Posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {poststore.posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                {post.title.length > 5
                  ? post.title.substring(0, 70) + "..."
                  : post.title}
              </TableCell>
              <TableCell>
                {post.body.replace(/<.*?>/g, "").length > 5
                  ? post.body.replace(/<.*?>/g, "").substring(0, 100) + "..."
                  : post.body.replace(/<.*?>/g, "")}
              </TableCell>
              <TableCell>{post.created_at}</TableCell>
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
