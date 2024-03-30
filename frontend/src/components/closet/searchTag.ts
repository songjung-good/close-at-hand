export const Tag =[
  {
    id : 'Category',
    name: ['dress', 'pants'],
  // '캐주얼상의', '코트', '드레스', '재킷', '청바지', '점퍼'
  },
  {
    id: 'Color',
    name: 'pants',
    // '노랑', '파랑', '초록',
  },
  {
    id: 'Detail',
    name: 'skirts',
    // 'cable', 'drop-shoulder',
  },
  {
    id: 'Fit',
    name: 'sweater',
    // 'loose', 'skinny', 'slim',
  },
  {
    id: 'Texture',
    name: '1',
    // 'jean', 'wool', 'leather',
  }
]

export const Color = [
  '블랙', '빨강', '파랑', '초록',
];

export const Detail = [
  'roll-up', 'cable', 'drop-shoulder',
];

export const Fit = [
  'normal', 'loose', 'skinny', 'slim',
];

export const texture = [
  'knit', 'jean', 'wool', 'leather',
];

export const ClothesTagGroups = [
  {
    clothesTagGroupName: '재질',
    clothesTagList: [
      { clothesTagName: '면' },
      { clothesTagName: '폴리에스터' },
      { clothesTagName: '울' },
      { clothesTagName: '나일론' },
      { clothesTagName: '레이온' },
    ],
  },
  {
    clothesTagGroupName: '색상',
    clothesTagList: [
      { clothesTagName: '검정' },
      { clothesTagName: '흰색' },
      { clothesTagName: '파란색' },
      { clothesTagName: '빨간색' },
      { clothesTagName: '회색' },
    ],
  },
  {
    clothesTagGroupName: '옷 종류',
    clothesTagList: [
      { clothesTagName: '티셔츠' },
      { clothesTagName: '바지' },
      { clothesTagName: '원피스' },
      { clothesTagName: '셔츠' },
      { clothesTagName: '자켓' },
    ],
  },
];