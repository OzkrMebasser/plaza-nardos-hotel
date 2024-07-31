
import Hero from "@/app/components/Hero";
import MetaData from "@/app/components/MetaData";
import Map from "@/app/components/Map";
import AmenitiesGrid from "@/app/components/Cards/AmenitiesGrid";
import HomeRoomsCards from "@/app/components/Cards/HomeRoomsCards";

// import { fetchTranslations } from "../api/fetchTranslations.js";

export function generateMetadata() {

  // const language = 'es'; 
  // const translations = fetchTranslations(language);

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
      <MetaData/>
      <HomeRoomsCards />
      <AmenitiesGrid />
      <Map />
    </>
  );
};

export default Home;
