import { useState } from "react";

type CupClickProps = {
  image: string;
  color: string;
  id: string;
};

export default function DevClub() {
  const [copChange, setCopChange] = useState("/assets/img1.png");
  const [highlightColor, setHighlightColor] = useState("bg-green-400");
  const [selectedCup, setSelectedCup] = useState("cup1");

  const handleCupClick = ({ image, color, id }: CupClickProps) => {
    setCopChange(image);
    setHighlightColor(color);
    setSelectedCup(id);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Meia-lua fixa no canto inferior direito */}
      <div
        className={`absolute bottom-0 right-0 w-[1200px] h-[1200px] rounded-full bg-green-400 opacity-50 translate-x-1/2 translate-y-1/2 z-0 ${highlightColor}`}
      ></div>

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
            src={copChange}
            alt="copo starbucks"
            className="relative z-10 w-full object-contain"
          />
        </div>
      </div>

      {/* 3 copos centralizados abaixo */}
      <div className="relative z-10 flex justify-center items-center gap-6 mt-20">
        {[
          { id: "cup1", src: "/assets/img1.png", color: "bg-green-400" },
          { id: "cup2", src: "/assets/img2.png", color: "bg-[#f8f1b2]" },
          { id: "cup3", src: "/assets/img3.png", color: "bg-pink-600" },
        ].map((cup) => (
          <img
            key={cup.id}
            src={cup.src}
            alt={cup.id}
            className="w-24 cursor-pointer transition-transform duration-300 transform hover:scale-150"
            onClick={() =>
              handleCupClick({ image: cup.src, color: cup.color, id: cup.id })
            }
          />
        ))}
      </div>
    </div>
  );
}
