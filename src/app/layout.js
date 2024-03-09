/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${poppins.variable} flex flex-col lg:flex-row h-full w-full`}
      >
        <div className="flex w-full">
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
