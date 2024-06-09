import { createLazyFileRoute } from "@tanstack/react-router";
import PostWidget from "@/components/dashboard/PostsWidget";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="">
        <div className="flex">
          <PostWidget />
        </div>
      </div>
    </>
  );
}
