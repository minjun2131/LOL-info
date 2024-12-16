"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import fetchChampionRotation, { getChampion } from "../api/api";
import Image from "next/image";
import Link from "next/link";

const Rotation = () => {
  const {
    data: rotation,
    isPending,
    error,
  } = useQuery({
    queryKey: ["rotationChampions"],
    queryFn: fetchChampionRotation,
  });

  const { data: champion } = useQuery({
    queryKey: ["Champions"],
    queryFn: getChampion,
    enabled: !!rotation,
  });

  if (isPending) return <p>Loading...</p>;
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
            className="border rounded p-4 hover:shadow-lg "
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
