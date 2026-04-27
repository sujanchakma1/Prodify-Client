"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden bg-gradient-to-b from-gray-400 to-white">
      
      {/* background blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center space-y-6">

          {/* headline */}
          <h1 className="text-4xl text-black md:text-6xl font-bold">
            Manage Your Products
            <span className="block text-blue-600">
              Smarter & Faster
            </span>
          </h1>

          {/* subtitle */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Organize, track, and manage your products effortlessly. 
            Add new items, control inventory, and streamline your 
            product workflow in one place.
          </p>

          {/* CTA */}
          <div className="flex justify-center gap-4 pt-4">

            <Link href="/items">
              <button className="border btn btn-neutral rounded hover:opacity-90 transition">
                View Products
              </button>
            </Link>

            <Link href="/items/add">
              <button className="border btn btn-outline btn-primary rounded hover:opacity-90 transition">
                Add Product
              </button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}