"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UseAuth from "@/contexts/UseAuth";

export default function RegisterForm() {
  const { createUser } = UseAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-md bg-card p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border p-3 rounded-lg"
          required
        />

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
          Register
        </button>
      </form>

      {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

      <p className="text-sm mt-4 text-center">
        Already have account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
