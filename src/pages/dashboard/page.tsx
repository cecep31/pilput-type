import { Link } from "react-router-dom";
import Logged from "../../components/layouts/Logged";

export default function Dashboard() {
  return (
    <>
      <Logged>
        <div className="">
          <Link className="text-blue-500" to="/">
            Home
          </Link>
        </div>
      </Logged>
    </>
  );
}
