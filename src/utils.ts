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
