import CountUp from "react-countup";
import { DataJatim } from "@/data/data-jawa-timur";

export const DataJawaTimur = () => {
  return (
    <section className="z-30 mx-auto grid h-fit w-3/4 grid-cols-1 place-items-center gap-x-10 rounded-xl border border-gray-50 bg-gradient-to-tr from-gray-950 to-gray-800 shadow-lg [box-shadow:0.3rem_0.3rem_0_#bcbcbc] md:w-4/5 md:grid-cols-3">
      <span className="absolute right-0 top-[80rem] z-0 h-40 w-40 bg-[#1fddff] [filter:blur(8rem)]" />
      {DataJatim.map(data =>
        <div key={data.id} id={data.id} className="my-8 cursor-default text-gray-50">
          <img src={data.img} alt={data.title} width="100" className="mx-auto mb-4" loading="lazy" />
          <span className="grid place-items-center text-2xl font-bold">
            <CountUp start={0} end={data.total} duration={10} />
          </span>
          <h5 className="mt-2 text-center text-lg font-medium">{data.title}</h5>
        </div>
      )}
    </section>
  );
};