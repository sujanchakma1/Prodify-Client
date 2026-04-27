"use client";

import LoginForm from "@/components/LoginForm";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm redirect={redirect} />
    </div>
  );
}