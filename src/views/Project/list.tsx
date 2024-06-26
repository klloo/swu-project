import { useState } from 'react';
import projects from '../../data/projects';
import type { ProjectType } from '../../types';
import { useNavigate } from 'react-router-dom';

function ProjectList() {
  const categoryList = ['Branding', 'UX/UI', 'Graphic', 'Film'];
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectType[]>(projects);

  const navigate = useNavigate();

  const onClickCategory = (category: string) => {
    setFilteredProjects(
      projects.filter((project) => project.category === category)
    );
  };

  return (
    <div>
      <div className="w-full flex justify-between">
        <div
          className="cursor-pointer lg:text-[24px] text-[18px] border-[1px] border-black lg:px-4 px-1 mr-2"
          onClick={() => setFilteredProjects(projects)}
        >
          All <span className="hidden lg:inline-block">Projects</span>
        </div>
        <div className="flex gap-2">
          {categoryList.map((category) => (
            <div
              className="cursor-pointer lg:text-[24px] text-[18px] border-[1px] border-black lg:px-4 px-1"
              key={category}
              onClick={() => onClickCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:mt-4 mt-2 lg:text-[20px] text-[14px] border-t-[1px] border-black grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-3">
        {filteredProjects.map((project) => (
          <div
            className="lg:mt-10 mt-7 cursor-pointer"
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="lg:h-[400px] h-[300px] bg-black" />
            <div className="mt-4">{project.name}</div>
            <div className="mt-1">{project.designers.join(' ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
