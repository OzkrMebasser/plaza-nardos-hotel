import StepForm from "@/app/components/BookingSteps/StepForm";

export const metadata = {
  title: `Hotel Plaza Nardo's | Reservaciones`,
  description:
    "Ubicado en el corazón de Playa del Carmen, a solo una cuadra de la Quinta Avenida, Plaza Nardo's es un hotel recién remodelado que ofrece una experiencia única. Con su playa privada y fácil acceso a las mejores tiendas y restaurantes, disfrutarás de una estancia inigualable en el centro turístico de la ciudad. ¡Ven y descubre la comodidad y el encanto de Plaza Nardo's!",
  icons: {
    icon: "/favicon.ico",
  },
};

const Reservaciones = () => {
  return (
    <>
      <section className="h-[125px] bg-[#2b3163] shadow-lg top-0 left-0 w-full transition-all duration-300"></section>
      <section className="mt-4 py-8">
        <StepForm />
      </section>
    </>
  );
};

export default Reservaciones;
