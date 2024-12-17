// Version구하기
export async function getPatchVersion(): Promise<Version> {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    return await response.json();
  } catch (err) {
    console.log("버전을 가져오는데 문제가 생겼습니다.");
    return [];
  }
}

// 데이터를 가져올 때 객체타입으로 가져오니까 맵핑을 해줘야 함.
export async function getChampion(): Promise<Champions> {
  try {
    const latestVersion = await getPatchVersion();
    if (!latestVersion.length) {
      throw new Error("버전을 불러오지 못했습니다.");
    }
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion[0]}/data/ko_KR/champion.json`,
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
    const latestVersion = await getPatchVersion();
    if (!latestVersion.length) {
      throw new Error("버전을 불러오지 못했습니다.");
    }

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion[0]}/data/ko_KR/champion/${id}.json`,
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
    const latestVersion = await getPatchVersion();
    if (!latestVersion.length) {
      throw new Error("버전을 불러오지 못했습니다.");
    }
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion[0]}/data/ko_KR/item.json`
    );
    return await response.json();
  } catch (err) {
    console.log("데이터를 가져오는데 문제가 발생하였습니다.");
    return { data: {} };
  }
}

export async function getItemDetail(key: string): Promise<Item | null> {
  try {
    const latestVersion = await getPatchVersion();
    if (!latestVersion.length) {
      throw new Error("버전을 불러오지 못했습니다.");
    }
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion[0]}/data/ko_KR/item.json`
    );
    const data: Items = await response.json();
    const item = data.data[key];

    if (!item) {
      throw new Error("아이템을 찾을 수 없습니다.");
    }
    return item;
  } catch (err) {
    console.log("데이터를 가져오는데 문제가 발생하였습니다.");
    return null;
  }
}

export default async function fetchChampionRotation(): Promise<RotationChampion> {
  const res = await fetch("/api/rotation");
  if (!res.ok) {
    throw new Error("데이터를 가져오지 못해 로드에 실패했습니다.");
  }
  return res.json();
}
