"use client";
import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('MXN');
  const [roomData, setRoomData] = useState([]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, roomData, setRoomData }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};