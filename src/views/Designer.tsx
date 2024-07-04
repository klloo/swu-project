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
  const [showDetail, setShowDetail] = useState<{ [key: string]: boolean }>(
    () => ({})
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
      <div className="w-full flex lg:text-[24px] text-[18px] justify-between overflow-x-auto scrollbar-hide">
        <div
          className="cursor-pointer border-[1px] border-black pl-4 lg:pr-4 pr-2 mr-2"
          onClick={() => setFilter('all')}
        >
          All <span className="lg:inline-block hidden">Designers</span>
        </div>
        <div className="flex gap-2">
          {consonantList.map((consonant) => (
            <div
              className="cursor-pointer border-[1px] border-black lg:px-2 px-1"
              key={consonant}
              onClick={() => setFilter(consonant)}
            >
              {consonant}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {filteredDesigners.map((designer: DesignerType) => (
          <div
            className="border-t-[1px] border-black w-full lg:flex gap-2 py-6"
            key={designer.email}
          >
            <div
              className="lg:w-[200px] w-full lg:text-[20px] text-[18px] lg:mb-0 mb-4 flex justify-between cursor-pointer"
              onClick={() => {
                setShowDetail((prev) => {
                  const newState = { ...prev };
                  newState[designer.email] = !prev[designer.email];
                  return newState;
                });
              }}
            >
              <div>{designer.name}</div>
              <img
                src="./images/caret-down-light.svg"
                className="w-7 lg:hidden"
              />
            </div>
            <div className="flex-1 lg:text-[20px] text-[16px]">
              <div className="flex lg:mb-2">
                <div className="lg:w-[120px] w-[90px] mr-2">Email</div>
                <div>{designer.email}</div>
              </div>
              <div className="flex lg:text-[20px] text-[16px]">
                <div className="lg:w-[120px] w-[90px] mr-2">Instagram</div>
                <div>@{designer.instagram}</div>
              </div>
            </div>
            <div
              className={`lg:w-[250px] w-full lg:h-[170px] duration-300 ${
                showDetail[designer.email] ? 'h-[170px]' : 'h-0'
              } flex lg:gap-2 gap-4 lg:mt-0 mt-4`}
            >
              <div className="w-1/2 h-full bg-black" />
              <div className="w-1/2 h-full bg-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designer;
