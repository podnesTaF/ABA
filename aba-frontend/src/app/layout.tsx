import "./globals.css";
import React from "react";
import Providers from "@/lib/providers/Providers";
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getFooter, getHeader} from "@/api/layoutApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner"
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ace Battle Association - Team Running Events & Dynamic Competitions",
  description: "Ace Battle Association initiates innovative team running events and competitive leagues globally. Explore the dynamic world of structured team races, strategic gameplay, and inclusive leagues for all levels, fostering a new era in team running sports.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = await prefetchQueries([{key: ['header'], fetchFn:getHeader}, {key: ['footer'], fetchFn: getFooter}]);


  return (
    <html lang="en"  className={`${inter.className}`}>
    <body
      className={`antialiased`}
    >
    <Providers>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            <div className={'pt-[60px] md:pt-0'}>
              {children}
            </div>
            <Footer/>
            <Toaster/>
        </HydrationBoundary>
    </Providers>
    </body>
    </html>
  );
}

