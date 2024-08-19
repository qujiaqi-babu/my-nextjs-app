'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function PostList({ posts }) {
  const pathname = usePathname()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
          href={`/blog#${post.id}`}
          className={`link ${pathname === '/blog/' + post.id ? 'active' : ''}`}
          >{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}