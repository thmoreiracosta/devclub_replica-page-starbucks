export default function About() {
  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto my-8 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#0c3823] flex items-center justify-center">
            <img
              src="/assets/guatemala.jpg"
              alt="Cold Brew e Refreshers"
              className="w-full h-full object-cover max-h-[500px]"
            />
          </div>

          <div className="bg-[#d5eae4] flex flex-col items-center justify-center text-center p-8 md:p-16 space-y-4">
            <h2 className="text-2xl md:text-3xl text-[#1e3932] font-medium">
              Coisas boas estão acontecendo
            </h2>
            <p className="text-[#1e3932] text-base md:text-lg">
              Acreditamos que podemos e devemos gerar um impacto positivo nas
              comunidades em que atuamos.
            </p>
            <button className="mt-4 px-6 py-2 border border-[#1e3932] text-[#1e3932] rounded-full hover:bg-[#1e3932] hover:text-white transition">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
