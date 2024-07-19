"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import ReservationForm from "@/app/components/ReservationForm";
import { useCurrency } from "@/app/contexts/CurrencyContext";
import { roomData } from "@/roomData";
import Hero from "./components/Hero";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Map from "./components/Map";
import AmenitiesGrid from  "./components/AmenitiesGrid"; 

const Home = () => {
  const { setRoomData } = useCurrency();
  const { getTranslations } = useLanguage();
  const translations = getTranslations();

  useEffect(() => {
    setRoomData(roomData);
  }, [setRoomData]);

  return (
    <>
      <Head>
        <title>{translations.meta.title}</title>
        <meta name="description" content={translations.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      <AmenitiesGrid/>
      <Map />
    </>
  );
};

export default Home;
