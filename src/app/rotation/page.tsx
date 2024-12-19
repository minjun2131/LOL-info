"use client";

import { useQuery } from "@tanstack/react-query";
import fetchChampionRotation, { getChampion } from "../api/api";
import Image from "next/image";
import Link from "next/link";

const Rotation = () => {
  const {
    data: rotation,
    error,
    isPending: isPendingRotation,
  } = useQuery({
    queryKey: ["rotationChampions"],
    queryFn: fetchChampionRotation,
  });

  const {
    data: champion,
    isPending: isPendingChampion,
    error: championError,
  } = useQuery({
    queryKey: ["Champions"],
    queryFn: getChampion,
    enabled: !!rotation,
  });

  if (isPendingRotation || isPendingChampion)
    return (
      <div className="fixed flex inset-0 items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 border-solid rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  const rotationChampions =
    rotation?.freeChampionIdsForNewPlayers.map((id) => {
      const champions = Object.values(champion?.data || {}).find(
        (champion: Champion) => parseInt(champion.key) === id
      );
      if (champions) {
        return champions;
      }
      return null;
    }) || [];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">로테이션 챔피언</h1>
      <div className="grid grid-cols-4 gap-4">
        {rotationChampions.map((champion) => (
          <Link
            href={`/champions/${champion?.id}`}
            key={champion?.key}
            className="border rounded p-4 hover:shadow-lg dark:border-gray-500"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion?.id}.png`}
              width={100}
              height={100}
              alt={champion?.name + "이미지"}
              className="mx-auto"
            ></Image>
            <h2 className="mt-2 text-xl font-semibold">{champion?.name}</h2>
            <p className="text-gray-500">{champion?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rotation;
