import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FslowMotionHeroVid.mp4?alt=media&token=4ed5eff5-a933-4a2d-95ae-f838d187cea4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      </div>
      <div className="video-content z-20 space-y-2 px-4 md:px-0">
       <h1 className="text-5xl font-bold">Bienvenido a nuestro Hotel</h1>
        <h3 className="font-light text-3xl">Relajate y disfruta!</h3>
      </div>
    </section>
  );
};

export default Hero;
