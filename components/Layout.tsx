"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import SplashScreen from "./SplashScreen";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [pathname]);

  return (
    <>
      {showSplash ? <SplashScreen /> : null}
      <div className="font-sans text-gray-900">
        <Header />
        <Breadcrumb />
        <main>{children}
          <SpeedInsights/>
        </main>
        <Footer />
      </div>
    </>
  );
}
