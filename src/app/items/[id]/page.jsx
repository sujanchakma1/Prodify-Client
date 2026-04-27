"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ItemDetails({ params }) {
  const { id } = use(params);

  const [item, setItem] = useState(null);
  const [allItems, setAllItems] = useState([]);

  // fetch all items
  useEffect(() => {
    const loadData = async () => {
      // 2. localStorage data
      const localData = JSON.parse(localStorage.getItem("products") || "[]");

      setAllItems(localData);

      // find single item
      const found = localData.find((i) => i.id == id);
      setItem(found);
    };

    loadData();
  }, [id]);

  if (!item) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  // related items (same category)
  const related = allItems.filter(
    (i) => i.category === item.category && i.id != item.id,
  );

  return (
    <ProtectedRoute>
      <div className="mx-auto px-6 py-10">
        {/* Back button */}
        <Link href="/items">
          <button className="mb-6 text-blue-600 hover:text-blue-500">
            ← Back to Items
          </button>
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{item.title}</h1>

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Price</h3>
            <p>${item.price}</p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-semibold">Category</h3>
            <p>{item.category}</p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-semibold">Rating</h3>
            <p>{item.rating}</p>
          </div>
        </div>

        {/* Full description */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>

        {/* Specifications */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Key Specifications</h2>

          <ul className="list-disc ml-6 text-gray-600">
            <li>Category: {item.category}</li>
            <li>Stock: {item.stock}</li>
            <li>Date: {item.date}</li>
          </ul>
        </div>

        {/* Related items */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Related Products</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {related.slice(0, 3).map((r) => (
                <div
                  key={r.id}
                  className="bg-card border p-4 rounded hover:shadow"
                >
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-500">{r.category}</p>
                  {/* button */}
                  <Link href={`/items/${r.id}`}>
                    <button className="mt-4 w-full btn btn-primary hover:opacity-90">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
