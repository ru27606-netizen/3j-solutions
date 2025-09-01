"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumb on home page
  if (pathname === "/") return null;

  // Generate breadcrumb items based on the current path
  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(path => path !== "");
    
    const breadcrumbs = paths.map((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      const label = path
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      return {
        href,
        label: label === "It" ? "IT" : label, // Special case for IT page
        isLast: index === paths.length - 1
      };
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="container-balanced">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              <span className="mx-2">/</span>
              {breadcrumb.isLast ? (
                <span className="text-gray-900 font-medium">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link 
                  href={breadcrumb.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
