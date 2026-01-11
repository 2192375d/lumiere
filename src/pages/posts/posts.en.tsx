import { Link } from "react-router-dom";

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  loadComponent: () => Promise<{ default: React.ComponentType }>;
};

export const posts: Post[] = [
  {
    id: "all-ice",
    title: "AllIce in Wonderlands",
    date: "December 20th, 2025 - January 3rd, 2026",
    description: "A topdown adventure game where you explore an icy world, acquire new ability, fight bosses; Winter Game Jam 2025 entry",
    loadComponent: () => import("@components/posts/all-ice.tsx"),
  },
  {
    id: "smart-air",
    title: "Smart Air",
    date: "November 2nd - December 2nd 2025",
    description: "An Android mobile app to help parent/child to track Athsma",
    loadComponent: () => import("@components/posts/Smart-Air.tsx"),
  },
  {
    id: "cirno-s",
    title: "Cirno's Swirlaria",
    date: "October 23rd - October 27th, 2025",
    description: "bullet dodging and food making touhou game; Touhou Game Jam 16th entry",
    loadComponent: () => import("@components/posts/CirnoS.tsx"),
  },
  {
    id: "matrix-calculation",
    title: "Linear Algebra Calculator",
    date: "January 2024 - November 2025",
    description: "A CLI based linear algebra calculator able to perform basic matrix operations, Gaussian elimination and it's applications",
    loadComponent: () => import("@components/posts/matrix-calculation.tsx"),
  },

];

export default function PostsEn() {

  return (
    <>
      <h1>DEV LOGS</h1>
      Those are projects I did before that I decided to log
      <br />

      {posts.map(({ id, title, date, description }) => (
        <Link
          key={id}
          to={`/posts/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "stretch",
              padding: "18px",
              marginBottom: "18px",
              background: "var(--color-post-background)",
              border: "1px solid var(--color-border-color)",
              borderRadius: "14px",
              boxShadow: "0 10px 22px rgba(0,0,0,0.35)",
              transform: "translateY(0)",
              transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.45)";
              e.currentTarget.style.borderColor = "var(--color-post-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 22px rgba(0,0,0,0.35)";
              e.currentTarget.style.borderColor = "var(--color-border-color)";
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flex: "1 1 0",
                minWidth: 0,
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "var(--color-h2)",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-post-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-h2)";
                }}
              >
                {title}
              </h2>
              <p style={{ margin: 0, color: "var(--color-text)" }}>{date}</p>
              <p style={{ margin: 0, color: "var(--color-text)" }}>{description}</p>
            </div>

            <img
              src={`/assets/posts-icon/${id}.webp`}
              alt={title}
              style={{
                width: "240px",
                height: "160px",
                objectFit: "contain",
                background: "var(--color-back-background)",
                borderRadius: "12px",
                border: "1px solid var(--color-border-color)",
                flex: "0 0 auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.borderColor = "var(--color-post-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "var(--color-border-color)";
              }}
            />
          </div>
        </Link>
      ))}
    </>
  )
}
