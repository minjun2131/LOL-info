import { NextResponse } from "next/server";



export async function GET() {
  const RIOT_API_URL = `https://kr.api.riotgames.com`;
  const RIOT_API_KEY = process.env.RIOT_API_KEY;
  
  if (!RIOT_API_KEY) {
    return NextResponse.json(
      { error: "API 키가 정의되지 않았습니다." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `${RIOT_API_URL}/lol/platform/v3/champion-rotations`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );

    if (!res.ok) {
      throw new Error("데이터를 가져오지 못해 로드에 실패했습니다.");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
