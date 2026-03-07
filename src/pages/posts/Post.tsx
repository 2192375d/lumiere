import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { useLanguage } from "@contexts/LanguageContext";
import { posts, type Post } from "@pages/posts/Posts";
import ReactMarkdown from "react-markdown";

import './Post.css'

export default function Post() {
  const { language } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p: Post) => p.id === id);

  if (language !== "english") return <p>this page does not exist</p>;

  if (!post) {
    return (
      <p>Post not found</p>
    );
  }

  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      if (!post) {
        return
      }
      const res = await fetch(post.source.path);
      const text = await res.text();
      setContent(text);
      setLoading(false);
    }

    load();
  }, [post]);

  if (loading) {
    return (<p>loading post...</p>);
  }

  return (
    <div className="vcontainer postContent">
      <h1>DEV LOGS</h1>
      <h2>{post.title} ({post.date})</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
