import { Suspense, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "@contexts/LanguageContext";
import { posts } from "@pages/posts/posts.en";
import PostsFr from "@pages/posts/posts.fr";
import PostsCn from "@pages/posts/posts.cn";
import PostsJp from "@pages/posts/posts.jp";

export default function PostPage() {
  const { language } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (language === "french") return <PostsFr />;
  if (language === "chinese") return <PostsCn />;
  if (language === "japanese") return <PostsJp />; // add a JP placeholder if empty

  if (!post) {
    return (
      <div>
        Post not found. <Link to="/posts">Back to posts</Link>
      </div>
    );
  }

  const PostComponent = lazy(post.loadComponent);

  return (
    <>
      <h1>DEV LOGS</h1>
      <h2>{post.title} ({post.date})</h2>
      <Suspense fallback={<div>Loading post...</div>}>
        <PostComponent />
      </Suspense>
    </>
  );
}
