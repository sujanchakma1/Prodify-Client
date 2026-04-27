"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ManageItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      // 2. localStorage data
      const localData = JSON.parse(localStorage.getItem("products") || "[]");

      setItems(localData);
    };

    loadData();
  }, []);

  // delete (only localStorage items delete হবে)
  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    const localData = JSON.parse(localStorage.getItem("products") || "[]");

    const updatedLocal = localData.filter((item) => item.id !== id);

    localStorage.setItem("products", JSON.stringify(updatedLocal));

    setItems((prev) => prev.filter((item) => item.id !== id));

    toast.success("Deleted successfully!");
  };

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl text-center font-bold mb-6">Manage Products</h1>

        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  {item.category} • ${item.price}
                </p>
              </div>

              <div className="flex gap-2">
                <Link href={`/items/${item.id}`}>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded">
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
