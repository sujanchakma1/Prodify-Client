"use client";

import Link from "next/link";
import UseAuth from "@/contexts/UseAuth";
import { IoMenu } from "react-icons/io5";


export default function UserDropdown() {
  const { user, profile, logOutUser } = UseAuth();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div >
          <IoMenu size={30}/>

        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-card rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        
         {/* Menu items */}
          <Link href="/items" className="block hover:bg-gray-600 p-2 md:hidden rounded">
           Items
          </Link>

          <Link href="/about" className="block hover:bg-gray-600 p-2 md:hidden rounded">
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
