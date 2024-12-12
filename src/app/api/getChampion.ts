
// 데이터를 가져올 때 객체타입으로 가져오니까 맵핑을 해줘야 함.
export async function getChampion(): Promise<Champions> {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/9.19.1/data/ko_KR/champion.json",
      {
        next: {
          revalidate: 86400, // 하루 86400초
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log("데이터를 가져오는데 문제가 발생하였습니다.");
    return {data:{}};
  }
}
