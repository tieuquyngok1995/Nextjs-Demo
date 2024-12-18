import { Metadata } from "next";

type Props = {
  params: { producId: string }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iphone ${params.producId}`)
    }, 100)
  })

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <h1>Details aboud product {params.producId}</h1>
  );
}