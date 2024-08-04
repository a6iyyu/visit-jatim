import CountUp from "react-countup";
import styled from "styled-components";
import { DataJumlahSekolah } from "@/data/jumlah-sekolah";

const SectionHover = styled.section`
  @media screen and (max-width: 3120px) {
    div:hover {
      transform: scale(1.05);
    }
    &:hover > div:not(:hover) {
      transform: scale(0.95);
      filter: blur(0.25rem);
    }
  }
  @media screen and (max-width: 1024px) {
    div:hover,
    &:hover > div:not(:hover) {
      filter: blur(0);
      transform: scale(1);
    }
  }
`;

export const JumlahSekolah = () => {
  return (
    <SectionHover className="z-10 mb-20 grid h-fit w-full grid-cols-2 grid-rows-2 place-items-center gap-5 lg:grid-cols-4 lg:grid-rows-1 lg:gap-0 lg:gap-x-10">
      <span className="absolute right-0 top-[70rem] z-0 h-40 w-40 bg-[#1fddff] opacity-50 [filter:blur(8rem)]" />
      {DataJumlahSekolah.map(stats =>
        <div key={stats.id} id={stats.id} className="grid h-full w-full cursor-default place-items-center rounded-xl border-2 border-gray-50 bg-gradient-to-tr from-gray-950 to-gray-800 py-8 shadow-lg transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc]">
          <CountUp start={0} end={stats.total} duration={10} className="text-2xl font-bold" />
          <h4 className="mt-2">{stats.total}</h4>
        </div>
      )}
    </SectionHover>
  );
};