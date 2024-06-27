import { useEffect, useState } from 'react';
import designers from '../data/designers';
import type { DesignerType } from '../types';
import { getInitialConsonant } from '../utils';

const consonantList = [
  'ㄱ',
  'ㄴ',
  'ㄷ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅅ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

function Designer() {
  const [filteredDesigners, setFilteredDesigners] = useState(designers);
  const [filter, setFilter] = useState<'all' | (typeof consonantList)[number]>(
    'all'
  );

  useEffect(() => {
    if (filter === 'all') {
      setFilteredDesigners(designers);
    } else {
      setFilteredDesigners(
        designers.filter(
          (designer) => getInitialConsonant(designer.name) === filter
        )
      );
    }
  }, [filter]);

  return (
    <div>
      <div className="w-full flex justify-between">
        <div
          className="cursor-pointer text-[24px] border-[1px] border-black px-4"
          onClick={() => setFilter('all')}
        >
          All Designers
        </div>
        <div className="flex gap-2">
          {consonantList.map((consonant) => (
            <div
              className="cursor-pointer text-[24px] border-[1px] border-black px-2"
              key={consonant}
              onClick={() => setFilter(consonant)}
            >
              {consonant}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-[20px]">
        {filteredDesigners.map((designer: DesignerType) => (
          <div
            className="border-t-[1px] border-black w-full flex gap-2 py-6"
            key={designer.email}
          >
            <div className="w-[200px]">{designer.name}</div>
            <div className="flex-1">
              <div className="flex mb-2">
                <div className="w-[120px]">Email</div>
                <div>{designer.email}</div>
              </div>
              <div className="flex">
                <div className="w-[120px]">Instagram</div>
                <div>@{designer.instagram}</div>
              </div>
            </div>
            <div className="w-[250px] flex gap-2">
              <div className="w-1/2 h-[170px] bg-black" />
              <div className="w-1/2 h-[170px] bg-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designer;
