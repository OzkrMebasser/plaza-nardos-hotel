import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { CurrencyProvider } from "./contexts/CurrencyContext.jsx";
import Navbar from "./components/Navbar.jsx";
import ChatCard from "./components/ChatCard.jsx";
import "./globals.css";




export const metadata = {
  
  title: "Hotel Plaza Nardo's",
  description: `Ubicado en el corazón de Playa del Carmen, 
  a solo una cuadra de la Quinta Avenida, Plaza Nardo's es un hotel
   recién remodelado que ofrece una experiencia única. Con su playa 
   privada y fácil acceso a las mejores tiendas y restaurantes, disfrutarás 
   de una estancia inigualable en el centro turístico de la ciudad. 
   ¡Ven y descubre la comodidad y el encanto de Plaza Nardo's!
`,
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
