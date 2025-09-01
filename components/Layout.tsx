import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Breadcrumb />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
