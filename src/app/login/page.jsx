"use client";

import LoginForm from "@/components/LoginForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Login() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm redirect={redirect} />
      </Suspense>
    </div>
  );
}
