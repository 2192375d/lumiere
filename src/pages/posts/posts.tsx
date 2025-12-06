import { useLanguage } from "@contexts/languageContext";

import PostsEn, { posts } from "@pages/posts/posts.en.tsx";
import PostsFr from "@pages/posts/posts.fr.tsx";
import PostsJp from "@pages/posts/posts.jp.tsx";
import PostsCn from "@pages/posts/posts.cn.tsx";

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
