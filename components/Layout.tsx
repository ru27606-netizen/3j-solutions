import Header from "./Header";
import { SpeedInsights } from "@vercel/speed-insights/next"
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
      <main>{children}
        <SpeedInsights/>
      </main>
      <Footer />
    </div>
  );
}
