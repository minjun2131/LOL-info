// 시그니쳐 인덱스는 물론 지정을 해도 된다.
// 그러나 타입스크립트를 쓰는 이유는 정확하게 타입을 지정하기 위함이라
// 만약 어떤 값이 들어올지도 모르고 정확하지 않다면 타입을 지정하기
// 그러나 너무 랜덤적으로 키가 지정되고 추가가된다면 시그니쳐 인덱스도 나쁘지 않다.

// 데이터를 정의할 때는 데이터가 가지고 있는 객체 형태는 유지하되
// 사용하지 않을 데이터는 따로 타입을 지정하지 않아도 된다.
// 형태를 유지하는 이유는 그래야지 타입스크립트에서 받아오는 데이터의 형태와
// 금방 비교를 하여 타입을 확인할 수 있기 때문이다.

// interface Champions {
//   data: {
//     // key가 아트록스인데 무슨 값이 올지 몰라서 변경
//     [key: string]: {
//       version: string; // "9.19.1";
//       id: string; // "Aatrox";
//       key: string; // "266";
//       name: string; // "아트록스";
//       title: string; // "다르킨의 검";
//       blurb: string; // "한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를...";
//       info: {
//         attack: number; //8;
//         defense: number; //4;
//         magic: number; //3;
//         difficulty: number; //4;
//       };
//       image: {
//         full: string; // "Aatrox.png";
//         sprite: string; // "champion0.png";
//         group: string; // "champion";
//         x: number; // 0;
//         y: number; // 0;
//         w: number; // 48;
//         h: number; // 48;
//       };
//       tags: string[]; // ["Fighter", "Tank"];
//     };
//   };
// }
// 동적 문자열을 이용해 한번 바꾸어 보자.

interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
}

interface Champions {
  data: {
    [key: string]: Champion;
  };
}

// object.keys 를 이용해야 할 것 같음 엔트리스
// 서버 컴포넌트에서 뿌려줄 때 해결을 해주어야 함
