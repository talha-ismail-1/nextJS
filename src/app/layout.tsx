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
          <SidebarProvider>
            {!hideLayout &&  <Header /> }
              {!hideLayout &&  <SideNav title={name}/> }
                {children}
            {!hideLayout && <Footer />}
          </SidebarProvider>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        </body>
      </html>
    );
  }
}
