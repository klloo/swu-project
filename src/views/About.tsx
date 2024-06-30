const professorList = [
  { subject: 'Branding', name: '이규락' },
  { subject: 'Graphic', name: '채병록' },
  { subject: 'UX/UI', name: '유영재' },
  { subject: 'Film', name: '최장섭' },
];
const committeeList = [
  { role: '위원장', name: '최희예' },
  { role: '부위원장', name: '유상아' },
  { role: '그래픽 팀장', name: '김보민' },
  { role: '웹 팀장', name: '이서연' },
  { role: '도록 팀장', name: '유상아, 최희예' },
  { role: '설치 팀장', name: '김다현, 이지은' },
  { role: '행사 팀장', name: '이유진' },
];

function About() {
  return (
    <div className="w-full lg:flex lg:text-[21px] lg:leading-[38px] text-[16px] items-start gap-10 font-normal leading-[30px] break-keep block">
      <img
        className="lg:w-1/3 w-full"
        src="/images/main.svg"
        alt="main-poster"
      />
      <div className="lg:w-1/3 lg:mt-0 lg:border-t-[1px] mt-8 w-full border-t-[1.5px] border-black pt-6">
        <p>
          서울여자대학교
          <br />
          제41회 시각디자인전공 졸업전시회
          <br />
          &lt;아름다운 형태의 관찰&gt;
        </p>
        <p className="mt-4">
          Seoul Women’s University
          <br />
          Visual Communication Design
          <br />
          Graduation Exhibition
          <br />
          &lt;Observation of Beautiful Form&gt;
        </p>
        <p className="mt-12">
          인사아트프라자 갤러리 2F, 3F
          <br />
          서울 종로구 인사동길 34 - 1
        </p>
        <p className="mt-4">
          Insa Art Plaza Gallery 2F, 3F
          <br />
          Insadong-gil, Jongno-gu, Seoul
        </p>
        <p className="mt-12">
          24.07.11 - 24.07.15
          <br />
          10:00 - 18:00, Last Day 10:00 - 12:00
        </p>
      </div>
      <div className="lg:w-1/3 lg:mt-0 lg:border-t-[1px] mt-8 w-full border-t-[1.5px] border-black pt-6">
        <p>
          만화경은 작은 조각들이 모여 아름다움을 만들어내는 장치이다. 정교하게
          배열된 거울 속 형형색색의 유리구슬, 종이조각들은 빛의 반사와 굴절을
          통해 끝없이 변하는 아름다운 무늬를 만들어낸다. 본래의 형태는 왜곡되어
          다른 형상으로 보이지만, 그 자체로 의미를 가진다.
        </p>
        <p className="mt-4">
          새로운 시각을 통해 일상의 물건을 관찰하고 그 속의 아름다운 형태를
          발견하는 디자이너의 역할은 만화경과 닮아 있다. 저마다의 경험에 의하여
          대상을 새로운 시선으로 바라보고, 그 속에서 숨겨진 아름다움을 찾아내며,
          재해석한다. 우리는 모두 저마다의 만화경을 가지고 끝없이 창조해 나간다.
        </p>
        <p className="mt-7">
          A kaleidoscope is a device in which small pieces gather to create
          beauty. Colorful glass beads and paper pieces in a precisely arranged
          mirror create beautiful patterns that change endlessly through the
          reflection and refraction of light. The original shape is distorted
          and appears to be another shape, but it has its own meaning.
        </p>
        <p className="mt-4">
          The role of a designer to observe everyday objects through a new
          perspective and discover the beautiful form within them is similar to
          a kaleidoscope. Through each experience, we look at the object with a
          new gaze, find the beauty hidden in it, and reinterpret it. We all
          create endlessly with our own kaleidoscope.
        </p>
        <div className="mt-10">
          <p>지도교수</p>
          <div className="mt-5">
            {professorList.map((item) => (
              <div className="flex gap-1 mb-2" key={item.subject}>
                <p className="w-[130px]">{item.subject}</p>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <p>졸업전시준비위원회</p>
          <div className="mt-5">
            {committeeList.map((item) => (
              <div className="flex gap-1 mb-2" key={item.role}>
                <p className="w-[130px]">{item.role}</p>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <p>후원사</p>
          <img
            className="mt-5 w-40 lg:w-fit"
            src="/images/sponsor.svg"
            alt="sponsor"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
