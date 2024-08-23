// `app/dashboard/customers/page.tsx` is the UI for the `/dashboard/customers` URL
export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <p>Customers Page</p>;
}