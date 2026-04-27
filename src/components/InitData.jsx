"use client";

import { useEffect } from "react";

export default function InitData() {
  useEffect(() => {
    const loadData = async () => {
      const existing = localStorage.getItem("products");

      if (!existing) {
        const res = await fetch("/items.json");
        const data = await res.json();

        localStorage.setItem("products", JSON.stringify(data));
      }
    };

    loadData();
  }, []);

  return null;
}