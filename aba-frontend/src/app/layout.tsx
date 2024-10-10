import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Providers from "@/lib/providers/Providers";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {prefetchQueries, prefetchQuery} from "@/lib/utils/queryHelpers";
import {getFooter, getHeader} from "@/api/layoutApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const helvetica = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-helvetica",
  weight: "400 700",
});
const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "400 500 600 700 800",
});

export const metadata: Metadata = {
  title: "Ace Battle Association",
  description: "The official website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = await prefetchQueries([{key: ['header'], fetchFn:getHeader}, {key: ['footer'], fetchFn: getFooter}]);


  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} ${montserrat.variable} antialiased`}
      >
      <Providers>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Header />
          {children}
          <Footer />
        </HydrationBoundary>
      </Providers>
      </body>
    </html>
  );
}

