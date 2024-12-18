import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Weelcome home!</h1>
      <h3>
        <Link href="/blog">Blog</Link>
      </h3>
      <h3>
        <Link href="/products">Products</Link>
      </h3>
      <h3>
        <Link href="/complex-dashboard">Complex Dashboard</Link>
      </h3>
    </>
  );
}