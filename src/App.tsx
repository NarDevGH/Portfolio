
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/layout/LayoutFile'
import NoPage from './pages/no_page/NoPageFile'
import AboutMePage from './pages/about_me/AboutMePageFile'

import './AppStyles.css'

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<AboutMePage/>} />
        <Route path="*" element={<NoPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;