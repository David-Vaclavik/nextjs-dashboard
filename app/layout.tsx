import "@/app/ui/global.css"; // Import global CSS styles in root layout, cannot be imported in components
import { inter, outfit } from "./ui/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <body className={`${outfit.className} antialiased`}>{children}</body> */}
      {/* <body>{children}</body> */}
    </html>
  );
}
