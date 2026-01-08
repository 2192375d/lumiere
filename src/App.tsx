import NavBar from '@components/NavBar'
import LanguageBar from "@components/LanguageBar"

import AppRoutes from "@routes/AppRoutes"

import './App.css'


export default function App() {
  return (
    <>
      <div className="hcontainer">
        <div className="navColumn">
          <LanguageBar />
          <NavBar />
        </div>
        <div className="main_page">

          <AppRoutes />
        </div>
      </div >
    </>
  )
}

