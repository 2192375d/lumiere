import { Routes, Route } from "react-router-dom";
import Home from "@pages/home/home";
import About from "@pages/about/about";
import Posts from "@pages/posts/posts";
import PostPage from "@pages/posts/Post";
import Tech from "@pages/tech/tech";
import Music from "@pages/music/music"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/music" element={<Music />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
