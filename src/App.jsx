import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import { ThemeProvider } from './context/ThemeContext';
import Home from './Components/Pages/Home';
import Experience from './Components/Pages/Experiences';
import Project from './Components/Pages/Projects';
import Profile from './Components/Pages/Profile';

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
