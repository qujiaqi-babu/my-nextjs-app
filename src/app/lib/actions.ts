'use server';
// 添加 'use server' 可以将文件内的所有导出函数标记为服务器操作
// 可以导入这些服务器函数并将其用于客户端和服务器组件
// 也可以直接在服务器组件中编写服务器行为，只需在行为中添加 “use server” 即可。本项目把它们都组织在一个单独的文件中。
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
// 新增
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100; // 以美分为单位存储金额

  // 数据库中，通常以美分为单位存储货币值，可以消除 JavaScript 浮点错误并确保更高的准确性
  const date = new Date().toISOString().split('T')[0]; // 创建新日期作为发票的创建日期，格式为“YYYY-MM-DD”

  // 创建一个 SQL 查询将新发票插入数据库并传入变量
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  // 清除客户端缓存并发出新的服务器请求
  revalidatePath('/dashboard/invoices');

  // 将用户重定向回页面 /dashboard/invoices
  redirect('/dashboard/invoices');
}

// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
// 更新
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// 删除
export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}