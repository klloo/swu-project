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
          className="cursor-pointer text-[24px] border-[1px] border-black px-4"
          onClick={() => setFilteredProjects(projects)}
        >
          All Projects
        </div>
        <div className="flex gap-4">
          {categoryList.map((category) => (
            <div
              className="cursor-pointer text-[24px] border-[1px] border-black px-4"
              key={category}
              onClick={() => onClickCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-[20px] border-t-[1px] border-black grid grid-cols-4 gap-10">
        {filteredProjects.map((project) => (
          <div
            className="mt-10 cursor-pointer"
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="h-[400px] bg-black" />
            <div className="mt-4">{project.name}</div>
            <div className="mt-1">{project.designers.join(' ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
