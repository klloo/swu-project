import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import designers from '../data/designers';
import projects from '../data/projects';
import type { DesignerType } from '../types';
import { getCategoryKr, getInitialConsonant } from '../utils';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredDesigners, setFilteredDesigners] = useState(designers);
  const [filter, setFilter] = useState<'all' | (typeof consonantList)[number]>(
    searchParams.get('cat') || 'all'
  );
  const [showDetail, setShowDetail] = useState<{ [key: string]: boolean }>(
    () => ({})
  );

  useEffect(() => {
    if (filter === 'all') {
      setFilteredDesigners(designers);
      setSearchParams({}); // 'all'일 때 쿼리 파라미터 제거
    } else {
      setFilteredDesigners(
        designers.filter(
          (designer) => getInitialConsonant(designer.name) === filter
        )
      );
      setSearchParams({ cat: filter }); // 'all'이 아닐 때만 쿼리 파라미터 설정
    }
  }, [filter, setSearchParams]);

  const navigate = useNavigate();
  const onClickProject = (projectName: string) => {
    const project = projects.find((project) => {
      return (
        `${getCategoryKr(project.category)}_${project.title}` === projectName
      );
    });
    if (project) {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <div>
      <div className="w-full flex lg:text-[24px] text-[18px] justify-between overflow-x-auto scrollbar-hide">
        <div
          className={`cursor-pointer lg:text-[24px] text-[18px] border-[1px] border-black lg:px-4 px-1 mr-2 ${
            filter === 'all' ? 'bg-black text-[#BABCBE]' : ''
          }`}
          onClick={() => setFilter('all')}
        >
          All <span className="lg:inline-block hidden">Designers</span>
        </div>
        <div className="flex gap-2">
          {consonantList.map((consonant) => (
            <div
              className={`cursor-pointer border-[1px] border-black lg:px-2 px-1 ${
                filter === consonant ? 'bg-black text-[#BABCBE]' : ''
              }`}
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
            className="border-t-[1px] border-black w-full lg:flex gap-2 py-6 pb-10"
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
                <div>{designer.instagram}</div>
              </div>
            </div>
            <div className={`lg:flex hidden w-[550px] h-[170px] gap-2 mt-0`}>
              <div className="flex flex-1 gap-4">
                <div>Project 1</div>
                <div className="w-1/2 h-full cursor-pointer">
                  <img
                    src={`https://swu-bucket.s3.ap-northeast-2.amazonaws.com/projects/thumbnail/${designer.project1.thumbnail}.png`}
                    alt={`${designer.name}-project1`}
                    className="w-full"
                    onClick={() => onClickProject(designer.project1?.name)}
                  />
                </div>
              </div>
              <div className="flex flex-1 gap-4">
                {designer.project2 && (
                  <>
                    <div>Project 2</div>
                    <div className="w-1/2 h-full cursor-pointer">
                      <img
                        src={`https://swu-bucket.s3.ap-northeast-2.amazonaws.com/projects/thumbnail/${designer.project2.thumbnail}.png`}
                        alt={`${designer.name}-project2`}
                        className="w-full"
                        onClick={() =>
                          onClickProject(designer.project2?.name ?? '')
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div
              className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
                showDetail[designer.email] ? 'max-h-[500px]' : 'max-h-0'
              } flex gap-4 mt-4`}
            >
              <div className="w-1/2 h-full transform transition-transform duration-300 ease-in-out">
                <img
                  src={`https://swu-bucket.s3.ap-northeast-2.amazonaws.com/projects/thumbnail/${designer.project1.thumbnail}.png`}
                  alt={`${designer.name}-project1`}
                  className={`w-full transition-transform duration-300 ease-in-out`}
                  onClick={() => onClickProject(designer.project1.name ?? '')}
                />
              </div>
              <div className="w-1/2 h-full transform transition-transform duration-300 ease-in-out">
                {designer.project2 && (
                  <img
                    src={`https://swu-bucket.s3.ap-northeast-2.amazonaws.com/projects/thumbnail/${designer.project2.thumbnail}.png`}
                    alt={`${designer.name}-project2`}
                    className={`w-full transition-transform duration-300 ease-in-out`}
                    onClick={() =>
                      onClickProject(designer.project2?.name ?? '')
                    }
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designer;
