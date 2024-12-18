import Link from "next/link"

export default function ProductList() {
  const products = Array.from({ length: 10 }, (_, index) => `Product ${index + 1}`);

  return (
    <>
      <Link href="/">Home</Link>
      <h1> Product List</h1>
      {products.map((product, index) => (
        <h3 key={index} >
          <Link href={`products/${index + 1}`}> {product}</Link>
        </h3>
      ))}
    </>
  );
}