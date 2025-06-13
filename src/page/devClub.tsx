export default function DevClub() {
  return (
    <div className="px-[100px] pt-[20px]">
      <div className="w-full flex justify-between items-center">
        <div className="w-[600px] mt-12">
          <h1 className="font-bold text-6xl">
            It's not just Coffee It's{" "}
            <strong className="text-green-600 text-7xl">Starbucks</strong>
          </h1>
          <p className="mt-8 text-1xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum
            expedita atque quas dolorum, alias nemo aut molestiae accusamus!
            Explicabo unde perferendis fugit placeat, repellat adipisci enim
            neque saepe doloribus!
          </p>
          <button className="mt-6 bg-green-600 text-white rounded-xl px-4 py-3 hover:bg-green-950 
               transform hover:scale-105 transition duration-300 ease-in-out ">Deixe seu Like</button>
        </div>
        <div className="">
          <img
            src="/assets/img1.png"
            alt="imagem-copo-starbucks"
            className="w-[340px] m-8"
          />
        </div>
      </div>

      <div>
        <img src="/assets/thumb1.png" alt="" className="" />
        <img src="/assets/thumb2.png" alt="" className="" />
        <img src="/assets/thumb3.png" alt="" className="" />
      </div>
    </div>
  );
}
