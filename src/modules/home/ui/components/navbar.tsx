"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { toast } from "sonner";
interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}
const navbarItems = [
  { href: "#home", children: "Home" },
  { href: "#about", children: "About" },
  { href: "#services", children: "Services" },
  { href: "#gallery", children: "Gallery" },
  { href: "#contact", children: "Contact" },
];
const popins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="elevated"
      className={cn(
        "bg-transparent text-white px-3.5 text-md hover:bg-[#3b82F6] hover:text-black  rounded-full",
        isActive && "text-black bg-[#3b82F6]"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const copyNumber = () => {
    navigator.clipboard.writeText("+1 940-612-9127");
    toast.success("Number copied successfully");
  };
  return (
    <nav className="h-20 border-b bg-[#101826] flex justify-between text-white font-medium px-6 lg:px-40">
      <Link href="/" className="flex items-center">
        <span
          className={cn(
            "text-5xl font-semibold text-blue-400",
            popins.className
          )}
        >
          hairport
        </span>
      </Link>
      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className="items-center hidden gap-4 lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={item.href === pathname}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="items-center hidden gap-6 lg:flex">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={copyNumber}
        >
          <PhoneIcon className="size-4 text-blue-500" />
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="line-clamp-1">+1 940-612-9127</span>
            </TooltipTrigger>
            <TooltipContent className="align-center bg-black/70">
              <span>+1 940-612-9127</span>
            </TooltipContent>
          </Tooltip>
        </div>
        <Button variant="elevated" className="bg-[#3b82F6]" asChild>
          <Link href="/" className="text-black">
            Book an Appointment
          </Link>
        </Button>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="border-transparent"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
