import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-auto  bg-primary-200">
      <NavBar />
      <Posts />
    </div>
  );
}
