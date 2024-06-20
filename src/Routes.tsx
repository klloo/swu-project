import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from './views/Home';
import Layout from './layouts/Layout';
import About from './views/About';
import Designer from './views/Designer';
import Project from './views/Proejct';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/designer" element={<Designer />} />
      <Route path="/project" element={<Project />} />
    </Route>
  )
);

export default router;
