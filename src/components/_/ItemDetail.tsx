import Image from "next/image";
import React from "react";

type ItemDetailProps = {
  data: Item;
};

const ItemDetail = ({ data }: ItemDetailProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${data.image.full}`}
        width={200}
        height={200}
        alt={data.name + "이미지"}
        className="mx-auto"
      ></Image>
      <h2 className="text-2xl text-gray-600 mb-4">{data.plaintext}</h2>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">스탯</h3>
        <ul className="list-disc list-inside">
          <li>가격: {data.gold.base}</li>
          <li>되파는 가격: {data.gold.sell}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemDetail;
