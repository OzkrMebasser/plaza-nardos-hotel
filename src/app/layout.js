import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { RoomsAndCurrencyProvider } from "./contexts/RoomsAndCurrencyContext.jsx";

import Navbar from "./components/MenuComponents/Navbar.jsx";
import ChatCard from "./components/Cards/ChatCard.jsx";
import "./globals.css";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";




export const metadata = {
  icons: {
    icon: "/favicon.ico",
  }
};
export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <RoomsAndCurrencyProvider>
        <html lang="es">
          <body>
            <Navbar />
            {children}
            <ChatCard />
            <Footer/>
            <ScrollToTopButton/>
          </body>
        </html>
      </RoomsAndCurrencyProvider>
    </LanguageProvider>
  );
}
