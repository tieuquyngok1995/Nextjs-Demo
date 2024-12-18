"use client"
import { useRouter } from "next/navigation";

export default function ArchivedNotifications() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/complex-dashboard/archived-notifications")
  }

  return (
    <>
      <h1>Default notifications</h1>
      <button onClick={handleClick}>Archived</button>
    </>
  );
}