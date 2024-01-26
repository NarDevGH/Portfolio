
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/layout/LayoutFile'
import NoPage from './pages/no_page/NoPageFile'
import AboutMePage from './pages/about_me/AboutMePageFile'
import ArticlesPage from './pages/articles/ArticlesPageFile'
import ContactPage from './pages/contact/ContactPageFile'
import ProjectsPage from './pages/projects/ProjectsPageFile'

import './AppStyles.css'

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<AboutMePage/>} />
        <Route path="projects" element={<ProjectsPage/>} />
        <Route path="articles" element={<ArticlesPage/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="*" element={<NoPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;