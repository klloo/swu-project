const HANGUL_START_CHARCODE = '가'.charCodeAt(0);
const HANGUL_END_CHARCODE = '힣'.charCodeAt(0);
const CHO_PERIOD = Math.floor('까'.charCodeAt(0) - '가'.charCodeAt(0));

function isHangul(charCode: number) {
  return HANGUL_START_CHARCODE <= charCode && charCode <= HANGUL_END_CHARCODE;
}

const CHO_HANGUL = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

export function getInitialConsonant(name: string) {
  const firstLetter = name[0];
  const letterCode = firstLetter.charCodeAt(0);

  if (!isHangul(letterCode)) {
    return firstLetter;
  }

  const charCode = letterCode - HANGUL_START_CHARCODE;

  const index = Math.floor(charCode / CHO_PERIOD);
  return CHO_HANGUL[index];
}

export const getCategoryEn = (category: string) => {
  switch (category) {
    case '브랜딩':
      return 'Branding';
    case 'UXUI':
      return 'UX/UI';
    case '그래픽':
      return 'Graphic';
    case '영상':
      return 'Film';
    default:
      return '';
  }
};

export const getCategoryKr = (category: string) => {
  switch (category) {
    case 'Branding':
      return '브랜딩';
    case 'UX/UI':
      return 'UXUI';
    case 'Graphic':
      return '그래픽';
    case 'Film':
      return '영상';
    default:
      return '';
  }
};
