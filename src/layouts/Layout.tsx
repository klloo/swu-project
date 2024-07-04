import { useCallback, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
function MobileHeader({ onClick }: { onClick: () => void }) {
  return (
    <header className="lg:hidden w-full flex justify-end sticky top-0 z-20 pt-7 lg:px-7 px-5 cursor-pointer">
      <img src="./images/list.svg" alt="list" onClick={onClick} />
    </header>
  );
}

function MobileFooter() {
  return (
    <footer className="lg:hidden text-[11px] lg:px-7 px-5 pb-20 absolute bottom-0 w-full">
      <div className="relative">
        <img src="./images/logo.svg" alt="main-logo" width="380" />
        <div className="mt-4">
          2024 © Seoul Women’s University Visual Communication Design.
          <br />
          All Rights Reserved.
        </div>
        <div className="lg:hidden mt-10 font-semibold">
          서울여자대학교 제41회 시각디자인전공 졸업전시회
        </div>
      </div>
      <img
        src="./images/swu-logo.svg"
        alt="swu-logo"
        className="lg:hidden absolute bottom-5 right-7 w-28"
      />
    </footer>
  );
}

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
  const [showMenu, setShowMenu] = useState(false);
  const onClickMobileMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, [setShowMenu]);

  return (
    <>
      <div
        className={`h-[100vh] w-full overflow-auto bg-cover bg-center bg-no-repeat bg-[#BABCBE] ${
          isHome
            ? 'bg-[url("/images/main-bg.svg")]'
            : 'bg-[url("/images/pattern.svg")]'
        }`}
      >
        <div className="relative min-h-[100vh]">
          <header className="lg:flex hidden w-full justify-between sticky top-0 z-20 pt-7 px-10">
            <Link to="/">
              <img src="./images/nav-logo.svg" alt="main-logo" width="270" />
            </Link>
            {menuList.map((menu) => {
              const isActive = location.pathname.includes(menu.link);
              return (
                <Link
                  key={menu.link}
                  to={menu.link}
                  className={`text-2xl font-normal ${
                    isActive ? 'underline underline-offset-[10px]' : ''
                  }`}
                >
                  {menu.label}
                </Link>
              );
            })}
          </header>
          <MobileHeader onClick={onClickMobileMenu} />
          <div
            className={
              !isHome
                ? 'relative z-10 lg:mt-[100px] mt-[50px] lg:px-7 px-5 pb-[26rem]'
                : ''
            }
          >
            <Outlet />
          </div>
          {!isHome && (
            <>
              <footer className="lg:block hidden text-[18px] lg:px-7 px-5 pb-20 absolute bottom-0 w-full">
                <div className="relative">
                  <img src="./images/logo.svg" alt="main-logo" width="380" />
                  <div className="mt-4">
                    2024 © Seoul Women’s University Visual Communication Design.
                    All Rights Reserved.
                  </div>
                  <div className="flex mt-10 gap-24 leading-[27px]">
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
              <MobileFooter />
            </>
          )}
        </div>
      </div>
      {showMenu && (
        <div
          className={`w-full h-full bg-black bg-opacity-20 z-50 absolute top-0 left-0`}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <div className="lg:hidden h-full w-1/2 absolute top-0 right-0 bg-white z-50 p-5 pt-10">
            <Link to="/">
              <img
                className="mb-10"
                src="./images/logo.svg"
                alt="main-logo"
                width="270"
              />
            </Link>
            {menuList.map((menu) => {
              const isActive = location.pathname.includes(menu.link);
              return (
                <Link
                  key={menu.link}
                  to={menu.link}
                  className={`text-2xl font-normal block mt-5 ${
                    isActive ? 'border-b-[1.5px] border-black' : ''
                  }`}
                >
                  {menu.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
