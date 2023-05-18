// "use client";
import "./globals.css";

import { jk } from "./globals.css";
// import { Roboto } from "next/font/google";
import GlobalStates from "./api/contexts/GlobalStates";
import Footer from "../components/footer";
// const roboto = Roboto({ subsets: ["latin"] });
// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "تشکیل",
  description: "Login Page",
};

export default function RootLayout({ children }) {
  return (
    <GlobalStates>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Lato:wght@300&family=Raleway:wght@500&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="bg-[e0e0e0] flex flex-col rale min-h-screen">
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </GlobalStates>
  );
}
