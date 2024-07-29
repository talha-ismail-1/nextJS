"use client";
import React, { useState, useEffect } from "react";
import { fetchFormData } from './api/FetchFormData';
import Dashboard from './home/page';
import { useRouter } from 'next/navigation';

export default function Home() {
  // const [currentView, setCurrentView] = useState("register");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [status, setStatus] = useState(null);
  // const router = useRouter();
  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     try {
  //       const data : any = await fetchFormData();
  //       if (data.status === "active") {
  //         setStatus(data.status);
  //         setCurrentView("home");
  //         setIsAuthenticated(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching form data:", error);
  //     }
  //   };

  //   fetchStatus();
  // }, []);

    return (
      <div>
        <section className="homeContent-section" id="homeSection">
          <Dashboard />
        </section>
      </div>
    );
}
