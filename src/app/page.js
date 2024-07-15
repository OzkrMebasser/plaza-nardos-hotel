"use client";
import React, { useEffect } from "react";
import ReservationForm from "@/app/components/ReservationForm";
import { useCurrency } from "@/app/contexts/CurrencyContext";
import { roomData } from "@/roomData";
import Hero from "./components/Hero";

const Home = () => {
  const { setRoomData } = useCurrency();

  useEffect(() => {
    setRoomData(roomData);
  }, [setRoomData]);

  return (
    <>
      {/* <h1 className="text-2xl font-bold">Bienvenido a nuestro Hotel</h1> */}
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </>
  );
};

export default Home;
