
import HomePage from "./pages/HomePage"
import { Routes, Route, Navigate} from "react-router-dom";
import ProjectPage from "./pages/project_page/ProjectPage";
import DeveloperPage from "./pages/developers_page/Developers";
import SignupPage from "./pages/signup_page/SignupPage";
import Success from "./pages/signup_page/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/developers" element={<DeveloperPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}

export default App;