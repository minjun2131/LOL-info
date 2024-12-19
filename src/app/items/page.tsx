//SSG

import Link from "next/link";
import { getItem } from "../api/api";
import Image from "next/image";

export default async function Items() {
  const items = await getItem();
  // object.keys 를 이용해 Object.entries로 map을 뿌러주어야 해결되는 문제다.
  // 따라서 type의 문제보단 서버 컴포넌트에서 뿌려줄 때 해결을 해주어야 함
  if (!items) {
    return console.log("데이터를 받아오지 못하였습니다");
  }
  const itemCheck = Object.entries(items.data);
  // console.log(itemCheck);
  // const itemInfo = Object.values(items.data);
  // console.log(itemInfo);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {itemCheck.map(([key, value]) => {
          const { name, image, plaintext } = value;
          return (
            <Link
              href={`/items/${key}`}
              key={key}
              className="border rounded p-4 hover:shadow-lg dark:border-gray-500"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${image.full}`}
                width={100}
                height={100}
                alt={name + "이미지"}
                className="mx-auto"
              ></Image>
              <h2 className="mt-2 text-xl font-semibold">{name}</h2>
              <p className="text-gray-500">{plaintext}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
