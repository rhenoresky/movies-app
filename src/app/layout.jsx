import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/lib/store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav className="w-full py-4 px-2 bg-[#3F3351] text-[#864879]">
            <h1 className="text-xl font-semibold">Navbar</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
