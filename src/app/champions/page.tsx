// ISR
// 최초에 빌드가 되었을 때 캐시가 되자마자 5초동안
// 카운터를 세고 5초가 지나면
// 캐시에서 제거가 됩니다.
// stale 유통기한 지난 데이터가 되고,
// 사용자가 또 페이지에 방문한다면
// 그때 다시 api 요청을 보내서 다시 캐싱을 한다.
// stale 된 정보는 상해있기 때문에 다시 refresh하기 때문에
// ISR을 쓰는 경우는 자주 바뀌지 않는 것
// Client component 사용할 때만 useQuery가 된다
// useQuery의 목적이 클라이언트를 위한 것이기 때문에
// SEO에서는 ISR SSG 같은 정적인 상태가 훨씬 도움이 많이 되는 것이다.

import Link from "next/link";
import { getChampion } from "../api/getChampion";
import Image from "next/image";

export default async function Champions() {
  const champions = await getChampion();
  // object.keys 를 이용해 Object.entries로 map을 뿌러주어야 해결되는 문제다.
  // 따라서 type의 문제보단 서버 컴포넌트에서 뿌려줄 때 해결을 해주어야 함
  const championInfo = Object.values(champions.data);
  console.log(championInfo);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {championInfo.map((champion) => (
          <Link
            href="/"
            key={champion.key}
            className="border rounded p-4 hover:shadow-lg "
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.id}.png`}
              width={100}
              height={100}
              alt={champion.name + "이미지"}
              className="mx-auto"
            ></Image>
            <h2 className="mt-2 text-xl font-semibold">{champion.name}</h2>
            <p className="text-gray-500">{champion.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
