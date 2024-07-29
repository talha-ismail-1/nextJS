"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "../slider/page";
import ContactUs from "../contact/page";
import Services from "../services/page";
import AboutUs from "../about/page";
import { useRouter } from 'next/navigation';
import SliderCarousel from "../slider/page";

function Dashboard(){
  const router = useRouter();
  useEffect(() => {
      const isAuthenticated = localStorage.getItem('auth') === 'true';
      if (!isAuthenticated) {
          router.replace('/login');
      }
  }, [router]);
    return(
      <div>
        <section className="homeContent-slider">
          <SliderCarousel />
        </section>
        <section className="homeContent-section" id="homeSection">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Home</h1>
          <p className="mt-4">
            This is the Home page of the web application. Here, you can find
            information about our company, our mission, and our team.
          </p>
          <div className="flex flex-wrap mt-4">
            <div className="w-1/2 p-4">
              <Image
                src="/images/car1.jpg"
                alt="Hero"
                width={500}
                height={300}
              />
            </div>
            <div className="w-1/2 p-4">
              <Image
                src="/images/car2.jpg"
                alt="Hero"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
        <section className="homeContent-section-about" id="aboutSection">
          <AboutUs />
        </section>
        <section className="homeContent-section-services" id="sectionServices">
          <Services />
        </section>
        <section className="homeContent-section-contact" id="contactSection">
          <ContactUs />
        </section>
      </div>
    );
}

export default Dashboard;