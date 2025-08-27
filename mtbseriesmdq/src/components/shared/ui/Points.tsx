import Image from "next/image";

const Points = () => {
  return (
    <section id="puntos_inscripcion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Puntos de Inscripción
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inscribite en los puntos de inscripción habilitados y 
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div className="w-1/2 animate-fade-in-left mx-auto">
            <Image
              src="/images/PuntosInscripcion02.jpg"
              alt="MTB Racing"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform rotate-0 hover:rotate-3 transition-transform duration-500"
              width={500}
              height={500}
            />
          </div>

          <div className="w-1/2 animate-fade-in-right mx-auto">
            <Image
              src="/images/PuntosInscripcion03.jpg"
              alt="MTB Racing"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform rotate-0 hover:-rotate-3 transition-transform duration-500"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;
