import * as XLSX from 'xlsx';
import type { ProjectType } from '../types';

const excelFilePath = '/data/project_list.xlsx';

const getCategory = (category: string) => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertToProjects(jsonData: any[]): ProjectType[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return jsonData.map((row: any, index: number) => ({
    id: index + 1,
    title: row['작품명'],
    designers: row['이름'].split(',').map((name: string) => name.trim()),
    category: getCategory(row['분야']),
    description: row['작품 소개'],
    thumbnailImageName: row['썸네일'],
    detailImageName: row['디테일'],
    filmUrl: row['영상 URL 제출'],
  }));
}

async function getProjects(): Promise<ProjectType[]> {
  try {
    const response = await fetch(excelFilePath);
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);

    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    const projects = convertToProjects(jsonData);
    return projects;
  } catch (error) {
    console.error('projects 파일을 불러오는 중 오류 발생:', error);
    throw error;
  }
}

export default await getProjects();
