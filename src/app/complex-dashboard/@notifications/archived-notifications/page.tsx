"use client"
import { useRouter } from "next/navigation";

export default function ArchivedNotifications() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/complex-dashboard/default-notifications")
  }

  return (
    <>
      <h1>Archived notifications</h1>
      <button onClick={handleClick}>Default</button>
    </>
  );
}