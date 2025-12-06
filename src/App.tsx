import { Routes, Route, useLocation } from "react-router-dom";
import PostsNavBar from '@components/postsNavBar'
import NavBar from '@components/navBar'
import LanguageBar from "@components/languageBar"
import Home from '@pages/home/home'
import About from '@pages/about/about'
import Posts from '@pages/posts/posts'
import Tech from '@pages/tech/tech'
import Space from '@pages/space'
// import Games from '@pages/games'
import './App.css'


export default function App() {
  const { pathname } = useLocation();
  const inPostsPage = (pathname == "/posts")


  return (
    <>
      <div className="hcontainer">
        <div className="navColumn">
          <LanguageBar />
          <NavBar />
          <br />
          {inPostsPage && <PostsNavBar />}
        </div>
        <div className="main_page">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/space" element={<Space />} />
            {/* <Route path="/games" element={<Games />} /> */}
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
      </div >
    </>
  )
}

