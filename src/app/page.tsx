// SSG

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-32">
      <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-800">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="w-full py-8 flex flex-wrap justify-between">
        <Link href="/champions" className="mx-auto">
          <div className="w-[500px] h-[300px] relative my-3 overflow-hidden">
            <Image
              loading="lazy"
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_62.jpg`}
              fill
              sizes="100vw"
              alt={"징크스_T1_이미지"}
              className="mx-auto transition-transform duration-300 hover:scale-105"
            ></Image>
          </div>
          챔피언 목록 보기
        </Link>
        <Link href="/rotation" className="mx-auto">
          <div className="w-[500px] h-[300px] relative my-3 overflow-hidden">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_30.jpg`}
              fill
              sizes="100vw"
              alt={"아트록스_DRX_이미지"}
              className="mx-auto mx-auto transition-transform duration-300 hover:scale-105"
            ></Image>
          </div>
          금주 로테이션 확인
        </Link>
        <Link href="/items" className="mx-auto ">
          <div className="w-[500px] h-[300px] relative my-3 overflow-hidden">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg`}
              fill
              sizes="100vw"
              alt={"빅토르_이미지"}
              className="mx-auto mx-auto transition-transform duration-300 hover:scale-105"
            ></Image>
          </div>
          아이템 목록 보기
        </Link>
      </div>
    </div>
  );
}
