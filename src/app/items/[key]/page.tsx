import { getItemDetail } from "@/app/api/api";

import ItemDetail from "@/components/_/ItemDetail";
import { Metadata } from "next";

type ItemProps = {
  params: {
    key: string;
  };
};
// 메타 데이터 반환
export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  const { key } = params;
  //디코딩
  // const decodeId = decodeURIComponent(id);

  return {
    title: `${key} - LOL Info`,
    description: `${key} 아이템 상세 페이지입니다.`,
  };
}

const ItemDetailPage = async ({ params }: ItemProps) => {
  const { key } = params;
  const Item = await getItemDetail(key);

  if (!Item) {
    return <div>아이템 데이터를 불러오지 못했습니다.</div>;
  }
  return <ItemDetail data={Item} />;
};

export default ItemDetailPage;

// 조건문 하나로 null 에 대한 정보를 찾을 수 없습니다가 하나 필요하다.
// 타입을 점점 좁혀나가서 정확하게 1개의 타입으로 추론하게 만드는게 중요하다.
