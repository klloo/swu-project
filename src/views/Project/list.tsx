import { useMemo, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import projectData from '../../data/projects';
import Exhibition from './exhibition';

function ProjectList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const projects = useMemo(() => projectData, []);
  const categoryList = ['Branding', 'UX/UI', 'Graphic', 'Film'];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const sortedFilteredProjects = useMemo(() => {
    const filtered =
      selectedCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [projects, selectedCategory]);

  useEffect(() => {
    const category = searchParams.get('cat') || 'all';
    setSelectedCategory(category);
  }, [searchParams]);

  const onClickCategory = (category: string) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: category });
    }
  };

  return (
    <div>
      <div className="w-full flex justify-between overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 mr-2">
          <div
            className={`cursor-pointer lg:text-[24px] text-[18px] border-[1px] border-black lg:px-4 px-1 ${
              selectedCategory === 'all' ? 'bg-black text-[#BABCBE]' : ''
            }`}
            onClick={() => onClickCategory('all')}
          >
            All <span className="hidden lg:inline-block">Projects</span>
          </div>
          <div
            className={`cursor-pointer lg:text-[24px] text-[18px] border-[1px] border-black lg:px-4 px-1 mr-2 ${
              selectedCategory === 'exhibition' ? 'bg-black text-[#BABCBE]' : ''
            }`}
            onClick={() => onClickCategory('exhibition')}
          >
            Exhibition
          </div>
        </div>
        <div className="flex gap-2">
          {categoryList.map((category) => (
            <div
              className={`cursor-pointer lg:text-[24px] text-[18px] border-[1px] border-black lg:px-4 px-1 ${
                selectedCategory === category ? 'bg-black text-[#BABCBE]' : ''
              }`}
              key={category}
              onClick={() => onClickCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:mt-4 mt-2 lg:text-[20px] text-[14px] border-t-[1px] border-black">
        {selectedCategory === 'exhibition' ? (
          <div className="lg:mt-10 mt-7">
            <Exhibition />
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-3">
            {sortedFilteredProjects.map((project) => (
              <div
                className="lg:mt-10 mt-7 cursor-pointer"
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="w-full">
                  <img
                    src={`https://swu-bucket.s3.ap-northeast-2.amazonaws.com/projects/thumbnail/${project.thumbnailImageName}.png`}
                    alt={project.title}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">{project.title}</div>
                <div className="mt-1">{project.designers.join(' ')}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
