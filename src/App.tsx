import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/projects/ProjectDetail";
import Contact from "./pages/Contact";
import { DEV_PREFIX } from "./data/track";

/**
 * 같은 페이지 컴포넌트를 두 경로에 건다.
 *   /      → 기획 트랙 (기본)
 *   /dev/* → 개발 트랙
 * 문구는 각 페이지가 useTrackContent()로 경로에 맞춰 가져간다.
 */
function TrackRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:slug" element={<ProjectDetail />} />
      <Route path="contact" element={<Contact />} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {TrackRoutes()}
          <Route path={DEV_PREFIX.slice(1)}>{TrackRoutes()}</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
