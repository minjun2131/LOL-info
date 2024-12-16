// 데이터를 가져올 때 객체타입으로 가져오니까 맵핑을 해줘야 함.
export async function getChampion(): Promise<Champions> {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json",
      {
        next: {
          revalidate: 86400, // 하루 86400초
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log("데이터를 가져오는데 문제가 발생하였습니다.");
    return { data: {} };
  }
}

export async function getChampionDetail(id: string): Promise<Champion | null> {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion/${id}.json`,
      {
        next: {
          revalidate: 86400, // 하루 86400초
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.data[id];
  } catch (err) {
    console.log("데이터를 가져오는데 문제가 발생하였습니다.");
    return null;
  }
}

export async function getItem(): Promise<Items> {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/item.json"
    );
    return await response.json();
  } catch (err) {
    console.log("데이터를 가져오는데 문제가 발생하였습니다.");
    return { data: {} };
  }
}

export default async function fetchChampionRotation(): Promise<RotationChampion> {
  const res = await fetch("/api/rotation");
  if (!res.ok) {
    throw new Error("데이터를 가져오지 못해 로드에 실패했습니다.");
  }
  return res.json();
}
