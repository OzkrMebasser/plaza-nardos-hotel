import React from "react";

import RoomDetails from "./RoomDetails";
import Title from "./Title";

const AllRoomsInfo = () => {
  const images_A = [
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble.webp?alt=media&token=16209fb6-62af-4c52-8bcd-981f56bc076f",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-1.webp?alt=media&token=34bc58db-7ac8-40ba-b75a-53ea944d49b1",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-2.webp?alt=media&token=d0f7e7f4-3752-4d1e-a68a-a05a087af3ed",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-3.webp?alt=media&token=a77704fa-2c32-4771-bf6d-89828e6f43af",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-4.webp?alt=media&token=36f9afdf-95b7-4ede-b332-54b62000da8a",
  ];
  const images_B = [
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble.webp?alt=media&token=16209fb6-62af-4c52-8bcd-981f56bc076f",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-1.webp?alt=media&token=34bc58db-7ac8-40ba-b75a-53ea944d49b1",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-2.webp?alt=media&token=d0f7e7f4-3752-4d1e-a68a-a05a087af3ed",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-3.webp?alt=media&token=a77704fa-2c32-4771-bf6d-89828e6f43af",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-4.webp?alt=media&token=36f9afdf-95b7-4ede-b332-54b62000da8a",
  ];

  const images2_A = [
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble.webp?alt=media&token=16209fb6-62af-4c52-8bcd-981f56bc076f",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-1.webp?alt=media&token=34bc58db-7ac8-40ba-b75a-53ea944d49b1",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-2.webp?alt=media&token=d0f7e7f4-3752-4d1e-a68a-a05a087af3ed",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-3.webp?alt=media&token=a77704fa-2c32-4771-bf6d-89828e6f43af",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-4.webp?alt=media&token=36f9afdf-95b7-4ede-b332-54b62000da8a",
  ];
  const images2_B = [
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble.webp?alt=media&token=16209fb6-62af-4c52-8bcd-981f56bc076f",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-1.webp?alt=media&token=34bc58db-7ac8-40ba-b75a-53ea944d49b1",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-2.webp?alt=media&token=d0f7e7f4-3752-4d1e-a68a-a05a087af3ed",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-3.webp?alt=media&token=a77704fa-2c32-4771-bf6d-89828e6f43af",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-4.webp?alt=media&token=36f9afdf-95b7-4ede-b332-54b62000da8a",
  ];
  return (
    <>
    {/* Fake nav back-ground color */}
    <section className="h-[125px] bg-[#7c7498] shadow-lg top-0 left-0 w-full transition-all duration-300">

    </section>
      <section className="mt-4 py-8">
      <Title
        title={"ALL ROOMS"}
      />
        <RoomDetails
          roomType="Room Double"
          images_A={images_A}
          images_B={images_B}
        />
     
        <RoomDetails
          roomType="Room Double deluxe"
          images_A={images2_A}
          images_B={images2_B}
        />

<RoomDetails
          roomType="Room Double Balcon"
          images_A={images_A}
          images_B={images_B}
        />
            <RoomDetails
          roomType="Room Triple"
          images_A={images_A}
          images_B={images_B}
        />

      </section>
    </>
  );
};

export default AllRoomsInfo;
