import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tabletop Tally",
  description: "Keep track of your board games... and victories!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
