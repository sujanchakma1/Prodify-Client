"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductPreview() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setItems(data.slice(0, 6)); // only 6 items
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card p-6 rounded-xl border hover:shadow-lg transition"
            >
              {/* image */}
              <div className="h-40 rounded mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* title */}
              <h3 className="font-semibold mb-2">{item.title}</h3>

              {/* desc */}
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {item.shortDescription}
              </p>

              {/* button */}
              <Link
                href={`/items/${item.id}`}
                className="text-primary hover:text-blue-500 font-medium"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
