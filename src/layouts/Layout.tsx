import { Canvas } from '@react-three/fiber';
import { Link, Outlet, useLocation } from 'react-router-dom';
// import Background from '../components/Backgroud';
import Ball from '../components/Ball';

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
  return (
    <>
      <div className="h-[100vh] overflow-auto">
        <header className="w-full flex justify-between sticky top-0 z-20 pt-5 px-10">
          <Link to="/">
            <div className="flex font-bold">
              <div className="text-xs">(1)</div>
              <div className="text-2xl mt-[-1px]">아름다운</div>
              <div className="text-xs ml-1">(2)</div>
              <div className="text-2xl mt-[-1px]">형태의</div>
              <div className="text-xs ml-1">(3)</div>
              <div className="text-2xl mt-[-1px]">관찰</div>
            </div>
          </Link>
          {menuList.map((menu) => {
            const isActive = location.pathname === menu.link;
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
        <div className="relative z-10 mt-[100px] px-7 pb-32">
          <Outlet />
        </div>
      </div>
      <Ball />
      <Canvas
        camera={{ fov: 15, position: [0, 0, 5] }}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          background: '#BABCBE',
        }}
      >
        {/* <Background /> */}
      </Canvas>
    </>
  );
}

export default Layout;
