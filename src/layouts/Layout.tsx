import { Canvas } from '@react-three/fiber';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Background from '../components/Backgroud';
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
      <div>
        <header className="w-full flex justify-between sticky top-0 z-10 pt-5 px-10">
          <Link to="/">아름다운 형태의 관찰</Link>
          {menuList.map((menu) => {
            const isActive = location.pathname === menu.link;
            return (
              <Link
                key={menu.link}
                to={menu.link}
                className={`text-2xl font-light ${isActive ? 'underline' : ''}`}
              >
                {menu.label}
              </Link>
            );
          })}
        </header>
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
      <Canvas
        camera={{ fov: 15, position: [0, 0, 5] }}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
        }}
      >
        <Background />
        <Ball />
      </Canvas>
    </>
  );
}

export default Layout;
