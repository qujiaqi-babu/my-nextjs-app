import PostList from "./postList"
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Blog() {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <PostList posts={Posts} />
      <h2>You're welcome!</h2>

    </>
  )
}

const Posts = [
  { id: 0, title: "可莉" },
  { id: 1, title: "希格雯" },
  { id: 2, title: "纳西妲" },
  { id: 3, title: "可莉" },
  { id: 4, title: "希格雯" },
  { id: 5, title: "纳西妲" },
  { id: 6, title: "可莉" },
  { id: 7, title: "希格雯" },
  { id: 8, title: "纳西妲" },
  { id: 9, title: "可莉" },
  { id: 10, title: "希格雯" },
  { id: 11, title: "纳西妲" },
  { id: 12, title: "可莉" },
  { id: 13, title: "希格雯" },
  { id: 14, title: "纳西妲" },
]
