import CirnoS from "../components/posts/CirnoS.tsx"
import MatrixCalculation from "../components/posts/matrix-calculation.tsx"
import SmartAir from "../components/posts/Smart-Air.tsx"

export const posts = [
  { id: "CirnoS", title: "Cirno's Swirlaria", date: "October 23rd - October 27th, 2025", Component: CirnoS },
  { id: "MatrixCalculation", title: "Linear Algebra Calculator", date: "January 2024 - November 2025", Component: MatrixCalculation },
  { id: "SmartAir", title: "Smart Air", date: "November 2nd - December 2nd 2025", Component: SmartAir },
];

export default function Posts() {

  return (
    <>
      <h1>(DEV) POSTS</h1>

      {posts.map(({ title, date, Component }) => {
        return (
          <section id={title} className="postCard">
            <h2>{title} ({date})</h2>
            <Component />
          </section>
        );
      })}
    </>
  )
}
