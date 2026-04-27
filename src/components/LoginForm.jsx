"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import UseAuth from "@/contexts/UseAuth";

export default function LoginForm() {
  const { loginUser } = UseAuth();
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      router.push(redirect || "/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-md bg-card p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg"
          required
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Login
        </button>
      </form>

      {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
}
