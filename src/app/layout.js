
import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { CurrencyProvider } from './contexts/CurrencyContext.jsx';
import Navbar from './components/Navbar.jsx';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <html lang="en">
          <body>
            <Navbar />
            {children}
          </body>
        </html>
      </CurrencyProvider>
    </LanguageProvider>
  );
}
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }