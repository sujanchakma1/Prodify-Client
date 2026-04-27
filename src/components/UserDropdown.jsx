"use client";

import Link from "next/link";
import UseAuth from "@/contexts/UseAuth";

export default function UserDropdown() {
  const { user, profile, logOutUser } = UseAuth();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Profile"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-200 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        
         {/* Menu items */}
          <Link href="/items" className="block hover:bg-gray-600 p-2 lg:hidden rounded">
           Items
          </Link>

          <Link href="/about" className="block hover:bg-gray-600 p-2 lg:hidden rounded">
            About
          </Link>
         {/* Menu items */}
          <Link href="/items/add" className="block hover:bg-gray-600 p-2 rounded">
            Add Product
          </Link>

          <Link href="/items/manage" className="block hover:bg-gray-600 p-2 rounded">
            Manage Products
          </Link>

          <button
            onClick={logOutUser}
            className="w-full text-left hover:bg-gray-600 p-2 rounded text-red-500"
          >
            Logout
          </button>
      </ul>
    </div>
  );
}
