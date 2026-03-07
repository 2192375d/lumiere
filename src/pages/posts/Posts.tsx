import { useLanguage } from "@contexts/LanguageContext";

import PostsEn from "@pages/posts/Posts.en.tsx";
import PostsFr from "@pages/posts/Posts.fr.tsx";
import PostsJp from "@pages/posts/Posts.jp.tsx";
import PostsCn from "@pages/posts/Posts.cn.tsx";

export type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  imgPath: string;
  source: { kind: "md"; path: string };
};

export const posts: Post[] = [
  {
    id: "all-ice",
    title: "AllIce in Wonderlands",
    date: "December 20th, 2025 - January 3rd, 2026",
    description: "A topdown adventure game where you explore an icy world, acquire new ability, fight bosses; Winter Game Jam 2025 entry",
    imgPath: "/assets/posts-icon/all-ice.webp",
    source: { kind: "md", path: "/posts/all-ice.md" },
  },
  {
    id: "smart-air",
    title: "Smart Air",
    date: "November 2nd - December 2nd 2025",
    description: "An Android mobile app to help parent/child to track Athsma",
    imgPath: "/assets/posts-icon/smart-air.webp",
    source: { kind: "md", path: "smart-air.md" },
  },
  {
    id: "cirno-s",
    title: "Cirno's Swirlaria",
    date: "October 23rd - October 27th, 2025",
    description: "bullet dodging and food making touhou game; Touhou Game Jam 16th entry",
    imgPath: "/assets/posts-icon/cirno-s.webp",
    source: { kind: "md", path: "cirno-s.md" },
  },
  {
    id: "matrix-calculation",
    title: "Linear Algebra Calculator",
    date: "January 2024 - November 2025",
    description: "A CLI based linear algebra calculator able to perform basic matrix operations, Gaussian elimination and it's applications",
    imgPath: "/assets/posts-icon/matrix-calculation.webp",
    source: { kind: "md", path: "matrix-calculation.md" },
  },

];


export default function Posts() {
  const { language } = useLanguage();

  if (language === "french") {
    return <PostsFr />;
  }
  if (language === "japanese") {
    return <PostsJp />;
  }
  if (language === "chinese") {
    return <PostsCn />;
  }
  if (language === "english") {
    return <PostsEn />;
  }

  throw new Error('Unexpected language: ' + { language });
}
