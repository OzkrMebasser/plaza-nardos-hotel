import Hero from "../components/Hero";
import Map from "../components/Map";
import AmenitiesGrid from "../components/Cards/AmenitiesGrid";
import HomeRoomsCards from "../components/Cards/HomeRoomsCards";

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
