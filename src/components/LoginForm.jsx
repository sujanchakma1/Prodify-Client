"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import UseAuth from "@/contexts/UseAuth";

function LoginFormInner() {
  const { loginUser } = UseAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      router.push(redirect || "/");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-md bg-card p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input name="email" placeholder="Email" type="email" className="w-full border p-3 rounded-lg" />
        <input name="password" placeholder="Password" type="password" className="w-full border p-3 rounded-lg" />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Login
        </button>
      </form>

      {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

      <p className="text-sm mt-4 text-center">
        Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default function LoginForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginFormInner />
    </Suspense>
  );
}