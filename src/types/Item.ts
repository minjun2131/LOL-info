interface Item {
  name: string; //"속도의 장화";
  description: string; //"<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +25";
  colloq: string; //";똥신;boots;speed";
  plaintext: string; //"이동 속도가 약간 증가합니다.";
  into: string[]; //["3006", "3047", "3020", "3158", "3111", "3117", "3009", "3173"];
  image: {
    full: string; //"1001.png";
    sprite: string; //"item0.png";
    group: string; //"item";
  };
  gold: {
    base: number;
    total: number;
    sell: number;
  };
  tags: string[]; //["Boots"];
}

interface Items {
  data: {
    [key: string]: Item;
  };
}
