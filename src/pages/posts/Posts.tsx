import { useLanguage } from "@contexts/LanguageContext";

import PostsEn, { posts } from "@pages/posts/Posts.en.tsx";
import PostsFr from "@pages/posts/Posts.fr.tsx";
import PostsJp from "@pages/posts/Posts.jp.tsx";
import PostsCn from "@pages/posts/Posts.cn.tsx";

export { posts };

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

  return <PostsEn />;
}
