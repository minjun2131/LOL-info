import { getChampion, getChampionDetail } from "@/app/api/api";
import ChampionDetail from "@/components/_/ChampionDetail";
import { Metadata } from "next";

type ChampionProps = {
  params: {
    id: string;
  };
};
// 메타 데이터 반환
export async function generateMetadata({
  params,
}: ChampionProps): Promise<Metadata> {
  const { id } = params;
  //디코딩
  // const decodeId = decodeURIComponent(id);

  return {
    title: `${id} - LOL Info`,
    description: `${id} 상세 페이지입니다.`,
  };
}

const ChampionDetailPage = async ({ params }: ChampionProps) => {
  const { id } = params;
  const champion = await getChampionDetail(id);

  if (!champion) {
    return <div>챔피언 데이터를 불러오지 못했습니다.</div>;
  }
  return <ChampionDetail data={champion} />;
};

export default ChampionDetailPage;

// 조건문 하나로 null 에 대한 정보를 찾을 수 없습니다가 하나 필요하다.
// 타입을 점점 좁혀나가서 정확하게 1개의 타입으로 추론하게 만드는게 중요하다.
