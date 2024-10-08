import Hero from "@/app/components/Hero";

import Map from "@/app/components/Map";
import AmenitiesGrid from "@/app/components/Cards/AmenitiesGrid";
import HomeRoomsCards from "@/app/components/Cards/HomeRoomsCards";

export function generateMetadata() {
  return {
    title: `Hotel Plaza Nardo's | Inicio`,
    description: "",
    icons: {
      icon: "/favicon.ico",
    },
  };
}
const Home = () => {
  return (
    <>
      <Hero />
      <HomeRoomsCards />
      <AmenitiesGrid />
      <Map />
    </>
  );
};

export default Home;
