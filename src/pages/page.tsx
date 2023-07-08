import { Link } from "react-router-dom";
import { useStore } from "@/store";

export default function Dashboard() {
  const { count } = useStore();
  return (
    <>
      <div className="">
        <Link className="text-blue-500" to="/">
          count: {count}
        </Link>
      </div>
    </>
  );
}
