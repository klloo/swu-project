import { useParams } from 'react-router-dom';
import projects from '../../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  if (!project) return null;
  return (
    <>
      <div className="w-full flex items-start gap-10 text-[21px] font-normal leading-[38px] break-keep">
        <div className="pt-4 w-1/4 border-t-[1px] border-black">
          {project.name}
        </div>
        <div className="pt-4 w-1/4 border-t-[1px] border-black">
          {project.designers.map((designer) => (
            <div key={designer}>{designer}</div>
          ))}
        </div>
        <div className="pt-4 w-1/2 border-t-[1px] border-black">
          {project.description}
        </div>
      </div>
      <div className="w-full h-[300vh] mt-12 bg-black" />
    </>
  );
}

export default ProjectDetail;
