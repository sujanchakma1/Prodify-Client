"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="btn btn-black rounded hover:opacity-80 transition"
      >
        ← Go to Home
      </Link>

    </div>
  );
}