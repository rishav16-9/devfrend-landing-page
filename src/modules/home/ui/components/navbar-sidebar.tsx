import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {PhoneIcon } from "lucide-react";
import Link from "next/link";

interface NavbarItems {
  href: string;
  children: React.ReactNode;
}
interface NavbarSidebarProps {
  items: NavbarItems[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="p-0 bg-[#101826]">
        <SheetHeader className="p-4 border-b text-white">
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col g-full overflow-y-auto pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="w-full text-left p-4 flex items-center text-white font-medium hover:text-blue-500 hover:bg-blue-900 rounded-md"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <div className="flex items-center gap-4 p-4">
              <PhoneIcon className="size-4 text-blue-500" />
              <span className="text-white">+1 940-612-9127</span>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
