"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    const loadData = async () => {
      // 2. localStorage data
      const localData = JSON.parse(localStorage.getItem("products") || "[]");

      setItems(localData);
    };

    loadData();
  }, []);

  // filtering logic
  const filteredItems = items.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "all" || item.category === category;

    const matchPrice =
      priceRange === "all"
        ? true
        : priceRange === "low"
          ? item.price < 100
          : item.price >= 100;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl text-center font-bold mb-6">Products</h1>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border p-3 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category filter */}
        <select
          className="border bg-card p-3 rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Wearable">Wearable</option>
          <option value="Furniture">Furniture</option>
          <option value="Office">Office</option>
          <option value="Storage">Storage</option>
        </select>

        {/* Price filter */}
        <select
          className="border bg-card p-3 rounded"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="all">All Price</option>
          <option value="low">Below $100</option>
          <option value="high">$100+</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-card border rounded-xl p-4 hover:shadow-lg transition "
          >
            {/* image */}
            <div className="h-60 bg-gray-100 rounded mb-4 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* title */}
            <h2 className="font-semibold text-lg">{item.title}</h2>

            {/* description */}
            <p className="text-gray-500 text-sm mt-1 line-clamp-1">
              {item.shortDescription}
            </p>

            {/* price */}
            <p className="mt-2 font-bold">${item.price}</p>

            {/* button */}
            <Link href={`/items/${item.id}`}>
              <button className="mt-4 w-full btn btn-primary hover:opacity-90">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
