import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './layouts/Layout';
import ProjectList from './views/Project/list';
import ProjectDetail from './views/Project/detail';
import Home from './views/Home';
import About from './views/About';
import Designer from './views/Designer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/designer" element={<Designer />} />
      <Route path="/project" element={<ProjectList />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Route>
  )
);

export default router;
