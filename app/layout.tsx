import "@/app/ui/global.css"; // Import global CSS styles in root layout, cannot be imported in components
import { inter, outfit } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
      {/* <body className={`${outfit.className} antialiased`}>{children}</body> */}
      {/* <body>{children}</body> */}
    </html>
  );
}
