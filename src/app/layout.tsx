"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import SideNav from "./sidenav/page";
import { SidebarProvider } from './components/SidebarContext';
import "bootstrap/dist/css/bootstrap.min.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchFormData } from "./api/FetchFormData";
// import "bootstrap/dist/js/bootstrap.bundle.min";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const pathname = usePathname();
  const hideLayout = pathname === '/register' || pathname === '/login';
  {
    const [name, setName] = useState(null ?? '');
  const router = useRouter();
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data: any = await fetchFormData();
        setName(data[0].firstname + " " + data[0].lastname);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchStatus();
  }, []);
    return (
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
          <title>Web Application</title>
        </head>
        <body>
          <main className="flex min-h-screen flex-col items-center justify-between">

            <SidebarProvider>
            {!hideLayout &&  <Header /> }
              <div className="flex overflow-hidden">
              {!hideLayout &&  <SideNav title={name}/> }
                <div className={hideLayout ? 'h-full' : 'flex-1 overflow-y-auto overflow-hidden'}>
                  {children}
                </div>
              </div>
            {!hideLayout && <Footer />}
            </SidebarProvider>
          </main>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        </body>
      </html>
    );
  }
}
