import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const menuList = [
    {
      label: 'ABOUT',
      link: '/about',
    },
    {
      label: 'PROJECT',
      link: '/project',
    },
    {
      label: 'DESIGNER',
      link: '/designer',
    },
  ];
  const isHome = location.pathname === '/';
  return (
    <>
      <div className="h-[100vh] w-full overflow-auto bg-[url('/images/pattern.svg')] bg-cover bg-center bg-no-repeat bg-[#BABCBE]">
        <div className="relative min-h-[100vh]">
          <header className="w-full flex justify-between sticky top-0 z-20 pt-7 px-10">
            <Link to="/">
              <img src="./images/logo.svg" alt="main-logo" width="270" />
            </Link>
            {menuList.map((menu) => {
              const isActive = location.pathname.includes(menu.link);
              return (
                <Link
                  key={menu.link}
                  to={menu.link}
                  className={`text-2xl font-normal ${
                    isActive ? 'border-b-[1.5px] border-black' : ''
                  }`}
                >
                  {menu.label}
                </Link>
              );
            })}
          </header>
          <div
            className={
              !isHome ? 'relative z-10 mt-[100px] px-7 pb-[26rem]' : ''
            }
          >
            <Outlet />
          </div>
          {!isHome && (
            <footer className="px-10 pb-20 absolute bottom-0 w-full">
              <div className="relative">
                <img src="./images/logo.svg" alt="main-logo" width="380" />
                <div className="text-[18px] mt-4">
                  2024 © Seoul Women’s University Visual Communication Design.
                  All Rights Reserved.
                </div>
                <div className="text-[18px] mt-10 flex gap-24 leading-[27px]">
                  <div>
                    서울여자대학교
                    <br /> 제41회 시각디자인전공 졸업전시회
                  </div>
                  <div>
                    Seoul Women’s University
                    <br />
                    Visual Communication Design
                    <br />
                    Graduation Exhibition
                  </div>
                </div>
                <img
                  src="./images/swu-logo.svg"
                  alt="swu-logo"
                  className="absolute bottom-0 right-0"
                />
              </div>
            </footer>
          )}
        </div>
      </div>
    </>
  );
}

export default Layout;
