"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} ></input>
      </div>
      {navLink.map((link) => {

        const isActive = pathname.startsWith(link.href);
        return (
          <Link key={link.href} href={link.href} className={isActive ? "font-bold mr-1" : "text-blue-500 mr-1"}>{link.name}</Link>
        )
      })}
      {children}
    </>
  );
}