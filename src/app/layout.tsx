"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { SnackbarProvider } from "notistack";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { UserContextProvider } from "@/contexts/UserContextProvider";
import { useState } from "react";
import ThemeProvider from '@/theme';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  adjustFontFallback: false,
  weight: ['100', '300', '400', '500', '700', '900',]
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const [loader, setLoader] = useState(true);
  const [userData, setUserData] = useState<any>(null);

  //code for reauthentication

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href={''} />
        <link rel="icon" type="image/png" sizes="32x32" href={''} />
        <link rel="icon" type="image/png" sizes="16x16" href={''} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
        <meta name="description" content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style" />
        <meta name="keywords" content="react,material,kit,application,dashboard,admin,template" />
        <meta name="author" content="Minimal UI Kit" />

        <title>Prescripto</title>
      </head>

      <AppRouterCacheProvider options={{ key: 'mui-theme', enableCssLayer: true, prepend: true }}>
        <UserContextProvider value={{ userData }}>
          <body className={roboto.variable}>
            <SnackbarProvider maxSnack={3} preventDuplicate anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </SnackbarProvider>
          </body>
        </UserContextProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
