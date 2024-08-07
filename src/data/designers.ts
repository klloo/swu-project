import * as XLSX from 'xlsx';
import type { DesignerType } from '../types';

const excelFilePath = '/data/designer_list.xlsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertToProjects(jsonData: any[]): DesignerType[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return jsonData.map((row: any) => {
    const designer: DesignerType = {
      name: row['국문 이름'],
      email: row['웹 및 도록 기재용 이메일 주소'],
      instagram: row['인스타그램 아이디'],
      project1: { thumbnail: row['project1'], name: row['프로젝트 이름1'] },
    };

    if (row['project2']) {
      designer.project2 = {
        thumbnail: row['project2'],
        name: row['프로젝트 이름2'],
      };
    }

    return designer;
  });
}

async function getDesigners(): Promise<DesignerType[]> {
  try {
    const response = await fetch(excelFilePath);
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);

    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    return convertToProjects(jsonData);
  } catch (error) {
    console.error('designer 파일을 불러오는 중 오류 발생:', error);
    throw error;
  }
}

export default await getDesigners();
