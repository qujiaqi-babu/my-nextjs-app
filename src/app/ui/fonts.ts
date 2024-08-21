// 从模块 next/font/google 导入字体 Inter 作为主字体，然后指定想要加载的子集，如'latin'
import { Inter, Lusitana } from 'next/font/google';
// https://fonts.google.com/
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});