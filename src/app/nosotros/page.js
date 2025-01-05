import { FaHotel, FaUmbrellaBeach, FaHeart } from "react-icons/fa";
import Title from "../components/Title";

const Nosotros = () => {
  return (
    <>
      {/* Fake nav background */}
      <section className="h-[125px] bg-[#2b3163] shadow-lg top-0 left-0 w-full transition-all duration-300"></section>

      <section className="py-8">
        <Title title="Conócenos" />
      </section>
      <section className="bg-white px-6 md:px-20 lg:px-32 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 "></h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ubicados en el corazón de Playa del Carmen, en la famosa Quinta
            Avenida, somos un hotel recientemente remodelado que combina
            comodidad y encanto para ofrecer una experiencia única. En Plaza
            Nardo&apos;s, nuestra misión es brindar una estancia inolvidable,
            llena de confort y calidez, rodeado de los mejores atractivos
            turísticos.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center pb-16">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl pb-6">
              {/* <FaHotel className="text-4xl text-blue-500 mb-4" /> */}
              <img
                className="w-full h-64 object-cover rounded-t-lg"
                src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-5.webp?alt=media&token=d251d604-bea3-4307-9a4e-832123709be0"
                alt="Hotel Plaza Nardo's"
              />
              <h3 className="text-xl font-semibold text-[#2b3163] pt-2">
                Instalaciones Remodeladas
              </h3>
              <p className="text-[#2b3163] mt-2 px-4 text-justify">
                Disfruta de nuestras instalaciones recientemente remodeladas,
                diseñadas para ofrecer comodidad y estilo, incluyendo
                habitaciones modernas, piscina, y WiFi gratuito.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl pb-6">
              <img
                className="w-full h-64 object-cover rounded-t-lg"
                src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Fplayas-pdc.jpg?alt=media&token=4ac64539-d870-426b-bee4-81575e6165a5"
                alt="Hotel Plaza Nardo's"
              />

              <h3 className="text-xl font-semibold text-[#2b3163] pt-2">
                Playa Privada
              </h3>
              <p className="text-[#2b3163] mt-2 px-4 text-justify">
                Relájate en nuestra exclusiva zona de playa, ideal para
                disfrutar del sol y la belleza del Caribe mexicano.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl pb-6">

              <img
                className="w-full h-64 object-cover rounded-t-lg"
                src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Frecepcion-hotel-plazanardos.png?alt=media&token=2b85cebe-31b7-4af4-ab06-a1ab1baf7549"
                alt="Recepcion Hotel Plaza Nardo's"
              />

              <h3 className="text-xl font-semibold text-[#2b3163] pt-2">
                Atención Cálida
              </h3>
              <p className="text-[#2b3163] mt-2 px-4 text-justify">
                Nuestro equipo está comprometido con brindarte una experiencia
                inolvidable, haciendo de tu estancia algo realmente especial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
