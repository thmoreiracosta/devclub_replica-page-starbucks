export default function DevClub() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Meia-lua fixa no canto inferior direito */}
      <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] rounded-full bg-green-400 opacity-50 translate-x-1/2 translate-y-1/2 z-0"></div>

      {/* Conteúdo principal com texto e copo grande */}
      <div className="relative z-10 flex justify-between items-center px-40 pt-28">
        {/* Texto à esquerda */}
        <div className="max-w-xl">
          <h1 className="font-bold text-5xl leading-tight text-black">
            It's not just Coffee <br />
            It's{" "}
            <span className="text-green-600 text-6xl block mt-2">
              Starbucks
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum
            expedita atque quas dolorum, alias nemo aut molestiae accusamus!
            Explicabo unde perferendis fugit placeat, repellat adipisci enim
            neque saepe doloribus!
          </p>

          <button className="mt-8 bg-green-600 text-white rounded-xl px-6 py-3 hover:bg-green-800 transform hover:scale-105 transition duration-300 ease-in-out">
            Deixe seu Like
          </button>
        </div>

        {/* Copo grande à frente da meia-lua */}
        <div className="relative w-[400px] h-[400px]">
          <img
            src="/assets/img1.png"
            alt="copo starbucks"
            className="relative z-10 w-full object-contain"
          />
        </div>
      </div>

      {/* 3 copos centralizados abaixo */}
      <div className="relative z-10 flex justify-center items-center gap-6 mt-20">
        <img
          src="/assets/thumb1.png"
          alt="thumb 1"
          className="w-24 cursor-pointer transition-transform duration-300 transform hover:scale-110"
          onClick={() => console.log("Selecionado: Copo 1")} // lógica virá depois
        />
        <img
          src="/assets/thumb2.png"
          alt="thumb 2"
          className="w-24 cursor-pointer transition-transform duration-300 transform hover:scale-110"
          onClick={() => console.log("Selecionado: Copo 2")}
        />
        <img
          src="/assets/thumb3.png"
          alt="thumb 3"
          className="w-24 cursor-pointer transition-transform duration-300 transform hover:scale-110"
          onClick={() => console.log("Selecionado: Copo 3")}
        />
      </div>
    </div>
  );
}
