import { Canvas } from '@react-three/fiber';
import { Link, Outlet } from 'react-router-dom';
import Background from '../components/Backgroud';
import Ball from '../components/Ball';

function Layout() {
  const menuList = [
    {
      label: 'ABOUT',
      link: '/',
    },
    {
      label: 'PROJECT',
      link: '/',
    },
    {
      label: 'DESIGNER',
      link: '/',
    },
  ];
  return (
    <>
      <div>
        <header className="w-full flex justify-between sticky top-0 z-10 pt-5 px-10">
          <Link to="/">아름다운 형태의 관찰</Link>
          {menuList.map((menu) => (
            <Link to={menu.link} className="text-2xl font-light">
              {menu.label}
            </Link>
          ))}
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
