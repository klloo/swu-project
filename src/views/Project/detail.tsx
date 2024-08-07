import { useParams } from 'react-router-dom';
import projects from '../../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));

  if (!project) return null;
  return (
    <>
      <div className="w-full lg:flex block items-start gap-10 lg:text-[20px] text-[14px] font-normal lg:leading-[38px] leading-[30px] break-keep">
        <div className="pt-4 lg:pb-0 pb-4 lg:w-1/4 w-full border-t-[1px] border-black">
          {project.title}
        </div>
        <div className="pt-4 lg:pb-0 pb-4 lg:w-1/4 w-full border-t-[1px] border-black">
          {project.designers.map((designer) => (
            <div key={designer}>{designer}</div>
          ))}
        </div>
        {project.description && (
          <div className="pt-4 lg:pb-0 pb-4 lg:w-1/2 w-full border-t-[1px] border-black">
            {project.description}
          </div>
        )}
      </div>
      {project.filmUrl && (
        <iframe
          src={project.filmUrl}
          className="w-full lg:mt-12 lg:h-[100vh] h-[20rem] mt-6 bg-black"
        />
      )}
      {project.detailImageName && (
        <img
          src={`https://swu-bucket.s3.ap-northeast-2.amazonaws.com/projects/detail/${project.detailImageName}.png`}
          alt={project.title}
          className="w-full lg:mt-12 mt-6 bg-black"
        />
      )}
    </>
  );
}

export default ProjectDetail;
