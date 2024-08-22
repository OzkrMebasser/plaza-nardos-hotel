"use client"
import React, { createContext, useContext, useState } from 'react';

const RoomToggleContext = createContext();

export const RoomToggleProvider = ({ children }) => {
  const [activeRoom, setActiveRoom] = useState(null);

  const openRoomToggle = (room) => {
    setActiveRoom(room);
  };

  const closeRoomToggle = () => {
    setActiveRoom(null);
  };

  return (
    <RoomToggleContext.Provider value={{ activeRoom, openRoomToggle, closeRoomToggle }}>
      {children}
    </RoomToggleContext.Provider>
  );
};

export const useRoomToggle = () => {
  return useContext(RoomToggleContext);
};
