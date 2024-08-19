'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

// 使用usePathname()钩子来确定导航链接是否处于活动状态
// 由于usePathname()是一个客户端钩子，需要将导航链接提取到客户端组件中，然后导入到布局或模板中
export function NavLinks({ list }: { list: string[] }): React.ReactNode {
  const pathname = usePathname()

  return (
    <nav>
      {list?.map((item, i) => (
        <>
          <Link
            key={i}
            className={`link ${pathname === '/' + item ? 'active' : ''}`}
            href={`/${item}`}
          >
            {item ? item : 'home'}
          </Link>
          {'  '}
        </>
      ))}
    </nav>
  )
}