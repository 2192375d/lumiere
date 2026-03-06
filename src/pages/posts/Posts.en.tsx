import { Link } from "react-router-dom";
import { posts, type Post } from "@pages/posts/Posts"

import './Posts.css'

export default function PostsEn() {

  return (
    <>
      <h1>DEV LOGS</h1>
      Those are projects I did before that I decided to log
      <br />

      {posts.map(({ id, title, date, description, source }: Post) => (
        <Link
          key={id}
          to={`/posts/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="hcontainer postcard">
            <div className="vcontainer postcardtext">
              <h2>{title}</h2>
              <p>{date}</p>
              <p>{description}</p>
            </div>

            <img
              className="postcardimage"
              src={`/assets/posts-icon/${id}.webp`}
              alt={title}
            />
          </div>
        </Link>
      ))}
    </>
  )
}
