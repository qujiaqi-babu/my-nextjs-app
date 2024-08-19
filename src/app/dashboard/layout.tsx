import Link from 'next/link'

// 嵌套布局
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Link href="/dashboard">
          Dashboard
        </Link>
        {'  '}
        <Link href="/dashboard/setting">
          Setting
        </Link>
      </nav>
      {children}
    </section>
  )
}