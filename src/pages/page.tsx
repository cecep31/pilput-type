import { Link } from "react-router-dom";
import { countStore } from "@/stores/countStore";

export default function Dashboard() {
  const { count } = countStore();
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
