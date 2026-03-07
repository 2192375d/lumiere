import NavBar from '@components/NavBar'
import LanguageBar from "@components/LanguageBar"

import AppRoutes from "@routes/AppRoutes"

import './App.css'


export default function App() {
  return (
    <div className="hcontainer apppage">
      <div className="vcontainer utilitybar">
        <LanguageBar />
        <NavBar />
      </div>
      <div className="mainpage">
        <AppRoutes />
      </div>
    </div>
  )
}
