import { Kanit, Manrope, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/containers/Menu";
import Footer from "@/components/containers/Footer";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-thai",
});

export const metadata = {
  title: "Chanakarn Kruehong | Portfolio",
  description: "A portfolio showcasing projects, background, and backend focus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground",
          manrope.variable,
          syne.variable,
          kanit.variable
        )}>
        <div className="pointer-events-none fixed inset-0 -z-20">
          <div className="absolute left-[6%] top-20 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
          <div className="absolute bottom-10 right-[8%] h-80 w-80 rounded-full bg-secondary/20 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>
        <div className="relative isolate flex min-h-screen flex-col">
          <Menu />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
