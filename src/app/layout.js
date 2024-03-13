/* eslint-disable new-cap */
"use client";
import UserContext from "@/components/UserContext";
import "./globals.css";
import { Poppins } from "next/font/google";
import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children, session }) {
  const [user, setUser] = useState({
    userid: 3,
    name: "",
    password: "",
    latitude: "94.771430",
    longitude: "25.580180",
    type: "customer",
  });

  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${poppins.variable} flex flex-col lg:flex-row h-full w-full bg-gray-100`}
      >
        <UserContext.Provider value={{ user, setUser }}>
          <div className="flex w-full">
            <Toaster />
            {children}
          </div>
        </UserContext.Provider>
      </body>
    </html>
  );
}
