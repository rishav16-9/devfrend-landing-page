import Navbar from "@/modules/home/ui/components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
