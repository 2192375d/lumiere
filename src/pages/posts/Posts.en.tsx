import { Link } from "react-router-dom";
import { posts, type Post } from "@pages/posts/Posts"

import './Posts.css'

export default function PostsEn() {

  return (
    <div>
      <h1>DEV LOGS</h1>
      <p>
        Those are projects I did before that I decided to log
      </p>

      <div>
        {posts.map(({ id, title, date, description, imgPath }: Post) => (
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
                src={imgPath}
                alt={id}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
