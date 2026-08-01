
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/layout/LayoutFile'
import NoPage from './pages/no_page/NoPageFile'
import HomePage from './pages/home/HomeFile'
import ProjectsPage from './pages/projects/ProjectsPageFile'

import './AppStyles.css'

const minutesToMiliseconds = (int:number) => int * 60 * 1000;

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  const IMAGE_CHANGE_INTERVAL_MS = minutesToMiliseconds(1);
  const BACKGROUND_IMAGES = Object.values(
    import.meta.glob(`./assets/images/backgrounds/*.{jpg,jpeg,png,webp}`, { eager: true, import: 'default' })
  ) as string[];

  const backgroundSlideshowInitialization = () => {
      if (BACKGROUND_IMAGES.length === 0) {
        console.log("No background images found in the specified path.");
        return;
      }

      const interval = window.setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
      }, IMAGE_CHANGE_INTERVAL_MS);

      return () => window.clearInterval(interval);
  }

  useEffect(() => {
    if (!initialized) {
      backgroundSlideshowInitialization();
      setInitialized(true);
    }
  }, []);

  return (
    <div className="app">
      <img
        className="background-image"
        src={BACKGROUND_IMAGES[currentImageIndex]}
        alt="Background"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="projects" element={<ProjectsPage/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;