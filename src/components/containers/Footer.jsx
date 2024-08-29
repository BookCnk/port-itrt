"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * Footer component that displays the website's logo, slogan, and copyright information.
 * Renders only on pages other than the home page.
 *
 * @return {JSX.Element|null} The rendered Footer component or null if on the home page.
 */
export default function Footer() {
  const pathname = usePathname();

  // Render the footer component only on pages other than the home page
  return pathname !== "/" ? (
    <footer className="border-t">
      
      <div className="bg-accent text-center py-8 text-accent-foreground">
        <p>Copyright © 2023-24 - All Right Reserved</p>
      </div>
    </footer>
  ) : null;
}
