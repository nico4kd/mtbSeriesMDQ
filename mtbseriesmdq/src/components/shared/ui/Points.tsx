import Image from "next/image";

const Points = () => {
  return (
    <section id="puntos_inscripcion" className="pt-12 lg:pt-20 bg-gray-50 px-8">
      <div className="mx-auto pb-20 lg:px-4 lg:h-[calc(100vh-7rem)]">
        <div className="text-center mb-16 pt-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Puntos de Inscripción
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inscribite en los puntos de inscripción habilitados y 
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center justify-center">
          <div className="flex justify-center items-center animate-fade-in-left">
            <div className="gap-8">
              <Image
                src="/images/PuntosInscripcion02.jpg"
                alt="MTB Racing"
                className="rounded-3xl shadow-2xl max-w-[29rem] mx-auto transform rotate-0 hover:rotate-3 transition-transform duration-500 w-fit h-fit"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-center items-center animate-fade-in-right">
            <div className="gap-8">
              <Image
                src="/images/PuntosInscripcion02.jpg"
                alt="MTB Racing"
                className="rounded-3xl shadow-2xl max-w-[29rem] mx-auto transform rotate-0 hover:rotate-3 transition-transform duration-500 w-fit h-fit"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;
