import { SmoothScroll } from "@/components/smooth-scroll";
import Navbar from "@/modules/home/ui/components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SmoothScroll/>
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
