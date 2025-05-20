import { cn } from "@/lib/utils";
import { FaLinkedin } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});
export const Footer = () => {
  return (
    <footer className=" px-6 lg:px-40 py-2 bg-gradient-to-br from-blue-200 to-blue-950">
      <div className="flex flex-row items-center justify-between">
        <span
          className={cn("text-5xl font-semibold text-black", poppins.className)}
        >
          hairport
        </span>
        <div className="flex flex-row gap-8 items-center">
          <Link
            href="https://www.linkedin.com/in/rishav-surana-9aa97318b/"
            target="_blank"
          >
            <FaLinkedin className="size-10 cursor-pointer" />
          </Link>
          <Link href="https://github.com/rishav16-9" target="_blank">
            <FaGithub className="size-10 cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/rishav_surana/" target="_blank">
            <FaInstagramSquare className="size-10 cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
