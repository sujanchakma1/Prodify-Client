"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddItemPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    date: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake save (localStorage demo)
    const oldData = JSON.parse(localStorage.getItem("products") || "[]");

    const newItem = {
      ...form,
      id: Date.now(),
    };

    localStorage.setItem("products", JSON.stringify([...oldData, newItem]));

    // ✅ SUCCESS TOAST
    toast.success("Product added successfully!");

    // redirect
    router.push("/items");
  };

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl text-center font-bold mb-6">Add New Product</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 border p-6 rounded-xl"
        >
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="shortDescription"
            placeholder="Short Description"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Full Description"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            rows="4"
            required
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="price"
              placeholder="Price"
              type="number"
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              name="date"
              type="date"
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
          </div>

          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="image"
            placeholder="Image URL (optional)"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full btn btn-primary rounded hover:opacity-90"
          >
            Submit Product
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
