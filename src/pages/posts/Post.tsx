import { Suspense, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "@contexts/LanguageContext";
import { posts, type Post } from "@pages/posts/Posts";
import PostsFr from "@pages/posts/Posts.fr";
import PostsCn from "@pages/posts/Posts.cn";
import PostsJp from "@pages/posts/Posts.jp";

export default function Post() {
  const { language } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p: Post) => p.id === id);

  if (language === "french") return <PostsFr />;
  if (language === "chinese") return <PostsCn />;
  if (language === "japanese") return <PostsJp />;

  if (!post) {
    return (
      <div>
        Post not found. <Link to="/posts">Back to posts</Link>
      </div>
    );
  }


  if (!post.loadComponent) {
    return <div>Post not available</div>;
  }
  const PostComponent = lazy(post.loadComponent);

  return (
    <div>
      <h1>DEV LOGS</h1>
      <h2>{post.title} ({post.date})</h2>
      <Suspense fallback={<div>Loading post...</div>}>
        <PostComponent />
      </Suspense>
    </div>
  );
}
