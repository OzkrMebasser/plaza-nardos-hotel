"use client";
import React, { createContext, useContext, useState } from 'react';
import {roomsData, homeAmenities} from "@/api/data";
const dataRooms = roomsData;
const amenitiesHome = homeAmenities;

const RoomsAndCurrencyContext = createContext();

export const RoomsAndCurrencyProvider = ({ children }) => {
  
  const [currency, setCurrency] = useState('MXN');
  const [roomsData, setRoomsData] = useState(dataRooms);
  const [homeAmenities, setHomeAmenities] = useState(amenitiesHome);
  // console.log("Room Data: ", roomsData );
  // console.log("homeAmenities: ", homeAmenities)


  return (
    <RoomsAndCurrencyContext.Provider value={{ currency, setCurrency, roomsData, setRoomsData, homeAmenities, setHomeAmenities}}>
      {children}
    </RoomsAndCurrencyContext.Provider>
  );
};

export const useRoomsAndCurrency = () => {
  return useContext(RoomsAndCurrencyContext);
};
