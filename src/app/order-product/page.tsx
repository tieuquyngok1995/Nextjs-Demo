"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/")
  }

  const handleClickBack = () => {
    router.back();
  }

  const handleClickForward = () => {
    router.forward();
  }

  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
      <button onClick={handleClickBack}>Back</button>
      <button onClick={handleClickForward}>Forward</button>
    </>
  );
}