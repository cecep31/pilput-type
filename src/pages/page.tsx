import NavBar from "../components/header/Navbar";
import Landing from '../components/landing/landing';

export default function Home() {
  return (
      <div className="isolate bg-white dark:bg-gray-700">
        <NavBar />
        <Landing />
      </div>
  );
}
