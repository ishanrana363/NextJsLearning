import { Monoton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const roboto = Monoton({
  subsets: ["latin"],
  weight: ['400'], // Regular & Bold
  display: 'swap',
});

export const metadata = {
  title: "Create Next App",
  description: "Blog Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
