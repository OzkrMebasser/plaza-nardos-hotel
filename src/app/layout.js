import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { CurrencyProvider } from "./contexts/CurrencyContext.jsx";
import Navbar from "./components/Navbar.jsx";
import ChatCard from "./components/ChatCard.jsx";
import "./globals.css";




export const metadata = {
  
  title: "Hotel Plaza Nardo's",
  // description: <MetaData/>,
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <html lang="en">
          <body>
            <Navbar />
            {children}
            <ChatCard />
          </body>
        </html>
      </CurrencyProvider>
    </LanguageProvider>
  );
}
