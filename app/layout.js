import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tabletop Tally",
  description: "Keep track of your board games... and victories!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
