import Image from "next/image";
import React from "react";

type ChampionDetailProps = {
  data: Champion;
};

const ChampionDetail = ({ data }: ChampionDetailProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">{data.title}</h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${data.id}.png`}
        width={200}
        height={200}
        alt={data.name + "이미지"}
        className="mx-auto"
      ></Image>
      <p className="mt-4-gray-500">{data.blurb}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">스탯</h3>
        <ul className="list-disc list-inside">
          <li>공격력: {data.info.attack}</li>
          <li>방어력: {data.info.defense}</li>
          <li>마력: {data.info.magic}</li>
          <li>난이도: {data.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetail;
