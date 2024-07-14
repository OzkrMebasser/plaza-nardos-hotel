"use client"
import React, { useEffect } from 'react';
import ReservationForm from '@/app/components/ReservationForm';
import { useCurrency } from '@/app/contexts/CurrencyContext';
import { roomData } from '@/roomData'; 

const Home = () => {
  const { setRoomData } = useCurrency();

  useEffect(() => {
    setRoomData(roomData); 
  }, [setRoomData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Bienvenido a nuestro Hotel</h1>
      <ReservationForm />
    </div>
  );
};

export default Home;
