import AboutPage from "./pages/about_page/AboutPage";
import HomePage from "./pages/HomePage"
import { Routes, Route, Navigate} from "react-router-dom";
import ProjectPage from "./pages/project_page/ProjectPage";
import DeveloperPage from "./pages/developers_page/Developers";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/developers" element={<DeveloperPage />} />
      <Route path="/projects" element={<ProjectPage />} />

    </Routes>


  )
}

export default App;