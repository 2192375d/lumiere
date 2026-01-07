import NavBar from '@components/navBar'
import LanguageBar from "@components/languageBar"

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

