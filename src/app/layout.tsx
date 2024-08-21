import type { Metadata } from "next";
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// 使用元数据 API<head> 修改 HTML 元素，例如 title 和 meta
export const metadata: Metadata = {
  title: "Babu Dashboard",
  description: "Generated by create next app",
};

// 根布局
// 不应手动将诸如<title>和<meta>之类的<head>标签添加到根布局
// 元数据 API 可自动处理高级要求，例如流式传输和重复<head>元素删除
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 将字体添加到 /app/layout.tsx 的 <body> 元素中，字体将应用于整个应用程序 */}
      {/* 还添加了 Tailwind 使字体更平滑的 antialiased 类，非必须但可以增加一种美感 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}