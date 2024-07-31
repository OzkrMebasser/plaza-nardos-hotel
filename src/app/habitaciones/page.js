

import CardRoom from '../components/Cards/HomeRoomsCards';

// import { useLanguage } from "@/app/contexts/LanguageContext";




export const metadata = {
  

  title: `Hotel Plaza Nardo's | habitaciones `,
  description: "Ubicado en el corazón de Playa del Carmen, a solo una cuadra de la Quinta Avenida, Plaza Nardo's es un hotel recién remodelado que ofrece una experiencia única. Con su playa privada y fácil acceso a las mejores tiendas y restaurantes, disfrutarás de una estancia inigualable en el centro turístico de la ciudad. ¡Ven y descubre la comodidad y el encanto de Plaza Nardo's!",
  icons: {
    icon: "/favicon.ico",
  },
};

const Habitaciones = () => {
  
  return (
    <>
  
      <CardRoom />
    </>
  )
}

export default Habitaciones